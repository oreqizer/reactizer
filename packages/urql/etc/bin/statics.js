/* eslint-disable fp/no-mutation */
const fsx = require("fs-extra");
const path = require("path");
const md5 = require("md5");

const PATH = path.join(__dirname, "../../public");
const OUT = path.join(__dirname, "../../dist/static/generated");

const FOLDERS = ["locales", "themes"];
const GLOBALS = { locales: "__INTL__", themes: "__THEME__" };

const templatify = (folder, data) => `window.${GLOBALS[folder]} = ${JSON.stringify(data)};`;

const statics = () => {
  fsx.removeSync(OUT); // Clear

  FOLDERS.forEach(folder => {
    const list = fsx.readdirSync(path.join(PATH, folder));
    const map = {};

    list.forEach(file => {
      const filepath = path.join(PATH, folder, file);

      const data = fsx.readJSONSync(filepath);
      const hash = md5(JSON.stringify(data));
      const outfile = file.replace(".json", `.${hash}.js`);

      map[file.replace(".json", "")] = outfile;
      fsx.outputFileSync(path.join(OUT, folder, outfile), templatify(folder, data));
    });

    fsx.outputJSONSync(path.join(OUT, folder, "map.json"), map);
  });
};

statics();
