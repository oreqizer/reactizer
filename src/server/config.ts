import path from "path";
import fsx from "fs-extra";
import { ChunkExtractor } from "@loadable/server";

const LOADABLE_STATS = path.join(__dirname, "../loadable-stats.json");
const ROUTES = path.join(__dirname, "../client/scenes");

export const extractor = new ChunkExtractor({ statsFile: LOADABLE_STATS });

// Only reads flat ones by default
export const routes: string[] = ["/"].concat(
  fsx
    .readdirSync(ROUTES)
    .filter(folder => folder.match(/[a-zA-Z]+/))
    .map(folder => `/${folder}`),
);
