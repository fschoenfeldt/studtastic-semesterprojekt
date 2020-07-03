import Koa from "koa";
import session from "koa-session";
import bodyParser from "koa-bodyparser";
import Debug from "debug";
import serve from "koa-static";
import paths from "path";
import router from "./src/studtastic/router.mjs";
import {
  default as nunjucks
} from "./src/middleware/nunjucks.mjs"

const port = 3000;
const debug = Debug("studtastic-server");
const app = new Koa();
app.keys = ['dc0ccd92067235d61670a594bf6b645fc643fa6e'];
export default app; // <- Export is essential for testing!

const SESSIONCONFIG = {
  key: 'koa.sess', /** (string) cookie key (default is koa.sess) */
  /** (number || 'session') maxAge in ms (default is 1 days) */
  /** 'session' will result in a cookie that expires when session/browser is closed */
  /** Warning: If a session cookie is stolen, this cookie will never expire */
  maxAge: 86400000,
  autoCommit: true, /** (boolean) automatically commit headers (default true) */
  overwrite: true, /** (boolean) can overwrite or not (default true) */
  httpOnly: true, /** (boolean) httpOnly or not (default true) */
  signed: true, /** (boolean) signed or not (default true) */
  rolling: true, /** (boolean) Force a session identifier cookie to be set on every response. The expiration is reset to the original maxAge, resetting the expiration countdown. (default is false) */
  renew: false, /** (boolean) renew session when session is nearly expired, so we can always keep user logged in. (default is false)*/
  secure: false, /** (boolean) secure cookie*/
  sameSite: null, /** (string) session cookie sameSite options (default null, don't set it) */
};

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

  app.use(session(SESSIONCONFIG, app));
  app.use(bodyParser());
  
  // Use routes from router.mjs
  app.use(router.routes());

  // Error Handling
  app.on("error", async (err, ctx) => {
    console.error("Server error", err, ctx);
  });

  // Give the app the db so contoller.mjs can access it
 /*  app.context.db = await sqlite.open({
    'filename': path,
    driver: sqlite3.Database
  }); */

  // Actually start the server with provided port
  app.listen(port);
  debug("Server started on port %i.", port);
}

main("./data/bookmark.sqlite");