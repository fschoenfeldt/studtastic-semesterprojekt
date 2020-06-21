import Koa from "koa";
import Debug from "debug";
import sqlite3 from 'sqlite3'
import * as sqlite from "sqlite";
import serve from "koa-static";
import paths from "path";
import router from "./src/studtastic/router.mjs";
import {
  default as nunjucks
} from "./src/middleware/nunjucks.mjs"

const port = 3000;
const debug = Debug("studtastic-server");
const app = new Koa();
export default app; // <- Export is essential for testing!

/**
 * Server Bootup/Buildup Sequence
 * @module server
 * @function
 * @return undefined
 */
async function main(path) {
  const __dirname = paths.resolve();
  app.use(serve(__dirname + "/web"));

  // Use nujucks for templating
  app.use(nunjucks("views"));

  // Use routes from router.mjs
  app.use(router.routes());

  // Error Handling
  app.on("error", async (err, ctx) => {
    console.error("Server error", err, ctx);
  });

  // Give the app the db so contoller.mjs can access it
  app.context.db = await sqlite.open({
    'filename': path,
    driver: sqlite3.Database
  });

  // Actually start the server with provided port
  app.listen(port);
  debug("Server started on port %i.", port);
}

main("./data/bookmark.sqlite");