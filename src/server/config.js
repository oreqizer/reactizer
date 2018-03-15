/* @flow */
import fs from "fs";
import path from "path";

const assetsPath = path.join(__dirname, "../assets.json");

function getAssets() {
  if (!fs.existsSync(assetsPath)) {
    return {
      bundle: { js: "bundle.js" },
    };
  }

  return JSON.parse(fs.readFileSync(assetsPath));
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
