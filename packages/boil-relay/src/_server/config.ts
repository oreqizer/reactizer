import path from "path";
import fsx from "fs-extra";
import dotenv from "dotenv-safe";
import { ChunkExtractor } from "@loadable/server";

dotenv.config({
  allowEmptyValues: true,
  path: path.resolve(__dirname, "../../.env"),
  example: path.resolve(__dirname, "../../.env.example"),
});

// Env constants
// ---
export const PRODUCTION = process.env.NODE_ENV === "production";
export const PORT = process.env.PORT || "3000";

// Build thingies
// ---
const getExtractor = () => {
  const file = path.resolve(__dirname, "../loadable-stats.json");
  if (!PRODUCTION && !fsx.existsSync(file)) {
    // eslint-disable-next-line no-console
    console.log("Waiting for 'webpack-dev-server'");

    process.exit(0);
  }

  return new ChunkExtractor({
    statsFile: file,
    entrypoints: ["app"],
  });
};

export const extractor = getExtractor();

export const routes: string[] = ["/"].concat(
  fsx
    .readdirSync(path.resolve(__dirname, "../app/pages"))
    .filter(folder => folder !== "Index")
    .map(folder => `/${folder.toLowerCase()}`),
);
