// Imports
import {
  getAll,
  getById,
  create,
  removeEntry
} from "./model.mjs";

import {
  viewTeaser,
  viewFull
} from "./cli-view.mjs";

/**
 * Returns a formatted list of bookmarks
 * @module cli-controller
 * @function
 * @param {Object} db - SQLite Databse Object
 * @return {String} list - the list of bookmarks
 */
export async function list(db) {
  return (await getAll(db)).map((elem) => viewFull(elem)).join(("\n\n"));
}

/**
 * Returns a formatted single bookmark
 * @module cli-controller
 * @function
 * @param {Object} db - SQLite Databse Object
 * @return {String} bookmark - a formatted bookmark
 */
export async function show(db, id) {
  const oneBookmark = await getById(db, id);
  if (oneBookmark)
    return viewTeaser(oneBookmark);
  else
    return "Bookmark not found :("
}

/**
 * Inserts a bookmark entry into the database
 * @module cli-controller
 * @function
 * @param {Object} db - SQLite Databse Object
 * @param {Object} bookmark - the bookmark to be inserted
 * @return {Integer} lastID - result of database operation
 */
export async function insert(db, bookmark) {
  return `cli-controller: added entry - lastID: ${(await create(db, bookmark))}`;
}

/**
 * Removes a bookmark entry from the database
 * @module cli-controller
 * @function
 * @param {Object} db - SQLite Databse Object
 * @param {Integer} id - the bookmark to be inserted
 * @return {String} status - result of database operation
 */
export async function remove(db, id) {
  return removeEntry(db, id);
}
