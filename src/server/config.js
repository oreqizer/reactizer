/* @flow */
import fs from "fs";
import path from "path";

const ASSETS = path.join(__dirname, "../assets.json");

export const production = process.env.NODE_ENV === "production";

export const port = Number(process.env.PORT || 3000);

export type Assets = {
  bundle: { js: string },
  vendor: { js: string },
};

function loadAssets(): Assets {
  if (fs.existsSync(ASSETS)) {
    return JSON.parse(String(fs.readFileSync(ASSETS)));
  }

  return {
    bundle: { js: "bundle.js" },
    vendor: { js: "vendor.js" },
  };
}

export const assets = loadAssets();
