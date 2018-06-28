// @flow strict
import fs from "fs-extra";
import path from "path";

const assetsPath = path.join(__dirname, "../assets.json");

export type Assets = {
  bundle: { js: string },
  vendor?: { js: string },
};

function getAssets(): Assets {
  if (!fs.existsSync(assetsPath)) {
    return {
      bundle: { js: "/bundle.js" },
    };
  }

  return fs.readJsonSync(assetsPath);
}

export const port = Number(process.env.PORT || 3000);

export type Route = {
  url: string,
  filepath: string,
};

export const routes: Route[] = [
  {
    url: "/",
    filepath: "",
  },
];

export const assets = getAssets();
