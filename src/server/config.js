import fs from "fs";
import path from "path";

const assetsPath = path.join(__dirname, "../assets.json");

function getAssets() {
  if (!fs.existsSync(assetsPath)) {
    return {
      vendor: { js: "vendor.js", css: "vendor.css" },
      bundle: { js: "bundle.js", css: "bundle.css" },
    };
  }

  return JSON.parse(fs.readFileSync(assetsPath));
}

export const port = Number(process.env.PORT || 3000);

export const routes = [
  {
    path: "/",
    filename: "index.html",
  },
];

export const assets = getAssets();
