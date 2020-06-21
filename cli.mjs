// Imports
import {
  list,
  show,
  insert,
  remove
} from "./src/bookmark/cli-controller.mjs";

import {
  log
} from "./src/bookmark/helper/log.mjs";

import sqlite from "sqlite";
//!DEBUG import Debug from 'debug';
//!DEBUG const debug = Debug('bookmark:cli');

/**
 * Routes the User Input and outputs the according data into console.log()
 * @module cli
 * @function
 * @param {String} path - Path of SQLite Database file
 * @param {Array} argv - Arguments given by the user input
 * @return {undefined}
 */
async function router(path, argv) {
  // Define db
  const db = await sqlite.open(path);
  //!DEBUG db.on('trace', sql => debug("SQLite: %s", sql));

  let output = 'Unknown command';

  if (argv[2] == "all")
    output = await list(db);
  if (argv[2] == "show")
    if (argv[3] !== undefined)
      output = await show(db, argv[3]);
  if (argv[2] == "add")
    if (argv[3] !== undefined)
      output = await insert(db, {
        uri: argv[3],
        title: argv[4],
        description: argv[5],
        tags: argv[6]
      });
  if (argv[2] == "delete" || argv[2] == "remove")
    remove(db, argv[3]);
  else
    output = "cli.show error: You didn't provide an <ID> argument";

  log(output);
}

router("./data/bookmark.sqlite", process.argv);
