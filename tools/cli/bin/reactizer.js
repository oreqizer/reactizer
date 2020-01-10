#!/usr/bin/env node
/* eslint-disable no-console, fp/no-throw, fp/no-unused-expression */

const fsx = require("fs-extra");
const path = require("path");
const R = require("ramda");
const chalk = require("chalk");
const glob = require("glob");
const { argv } = require("yargs");

const filesets = require("./filesets");

const CWD = process.cwd();

const ACTION = argv._[0];
const DEBUG = argv.debug || false;
const APP = argv.app;
const MODULES = argv.modules ? path.join(CWD, argv.modules) : CWD;
const OUT = argv.out ? path.join(CWD, argv.out) : CWD;
const IGNORE = path.resolve(CWD, ".reactizerignore");
const ROOT = path.resolve(MODULES, `node_modules/@reactizer/boil-${APP}`);

const ACTIONS = {
  init: "init",
  update: "update",
};

console.log(chalk.blueBright("REACTIZER"));
if (!APP) {
  throw new Error(`Please specify the app`);
}

const fileset = filesets[APP];
if (!fileset) {
  throw new Error(`No such app: ${APP}`);
}

if (!ACTIONS[ACTION]) {
  console.log("Available commands:");
  console.log("  init");
  console.log("  update");
  console.log("");
  console.log("Available flags:");
  console.log("  --app (which app to clone)");
  console.log("  --modules (default CWD, path that contains 'node_modules')");
  console.log("  --out (default CWD, output path)");
  console.log("  --debug (provides debug logging");
  process.exit(1);
}

const toIgnore = () => {
  if (!fsx.existsSync(IGNORE)) {
    return {};
  }

  return String(fsx.readFileSync(IGNORE))
    .split("\n")
    .filter(Boolean)
    .filter(line => line.startsWith("#")) // comments
    .map(file => glob.sync(path.join(ROOT, file)))
    .reduce((acc, next) => acc.concat(next))
    .reduce(
      (acc, next) => ({
        ...acc,
        [next]: true,
      }),
      {},
    );
};

const copyFiles = files => {
  const ignore = toIgnore();

  files.forEach(input => {
    if (ignore[input]) {
      return;
    }

    const file = input.replace(ROOT, "");
    const out = path.join(OUT, file);
    if (input === out) {
      return;
    }

    fsx.ensureFileSync(out);

    const read$ = fsx.createReadStream(input);
    const write$ = fsx.createWriteStream(out);

    read$.pipe(write$);

    read$.on("error", err => {
      console.error(`Failed to read: ${file}`, err);
    });

    write$.on("error", err => {
      console.error(`Failed to write: ${file}`, err);
    });

    if (DEBUG) {
      write$.on("finish", () => {
        console.log(`Copied: ${file}\nTo: ${out}\n`);
      });
    }
  });
};

function updatePackage() {
  const OUT_PKG = path.join(OUT, "package.json");
  if (!fsx.existsSync(OUT_PKG)) {
    return;
  }

  const input = fsx.readJsonSync(path.join(ROOT, "package.json"));
  const out = fsx.readJsonSync(OUT_PKG);

  const deps = R.merge(out.dependencies, input.dependencies);
  const depsSorted = R.compose(
    R.reduce((acc, key) => R.assoc(key, deps[key], acc), {}),
    R.sortBy(R.identity),
    R.keys,
  )(deps);

  const devDeps = R.merge(out.devDependencies, input.devDependencies);
  const devDepsSorted = R.compose(
    R.reduce((acc, key) => R.assoc(key, devDeps[key], acc), {}),
    R.sortBy(R.identity),
    R.keys,
  )(devDeps);

  fsx.writeJsonSync(
    OUT_PKG,
    {
      ...out,
      scripts: { ...out.scripts, ...input.scripts },
      main: input.main,
      engines: R.mergeDeepRight(input.engines, out.engines || {}),
      commitlint: R.mergeDeepRight(input.commitlint, out.commitlint || {}),
      husky: R.mergeDeepRight(input.husky, out.husky || {}),
      dependencies: depsSorted,
      devDependencies: devDepsSorted,
    },
    {
      spaces: 2,
    },
  );
}

if (ACTION === ACTIONS.init) {
  console.log("Initializing...");

  updatePackage();
  copyFiles(fileset.init);
}

if (ACTION === ACTIONS.update) {
  console.log("Updating...");

  updatePackage();
  copyFiles(fileset.update);
}