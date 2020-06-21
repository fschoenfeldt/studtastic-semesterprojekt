import {
  formatDate
} from "./helper/format.mjs";

import * as formHelper from './helper/form.mjs';

/*
 !TODO: Use .catch & .then in database queries for error handling.
 See:
   Randnotiz
    Im Fehlerfall (insbesondere Datenbank-Fehler) ist dieser Weg, die Anwendung zu starten, nicht optimal. Für eine bessere Lösung müssen Sie statt await das von sqlite.open() zurückgegebene Promise mit then() und catch() verwenden.
*/

/**
 * Get all bookmarks
 * @module model
 * @function
 * @param {Object} db - SQLite Databse Object
 * @return {Object} all bookmarks - Object containing all bookmarks
 */
export async function getAll(db) {
  return await db.all("SELECT * FROM bookmarks");
}

/**
 * Gets an entry by ID
 * @module model
 * @function
 * @param {Object} db - SQLite Databse Object
 * @param {Integer} id - id of entry
 * @return {Object} entry - entry
 */
export async function getById(db, id) {
  return await db.get("SELECT * FROM bookmarks WHERE id=$id", {
    $id: id
  });
}

/**
 * Inserts a bookmark entry into the database
 * @module model
 * @function
 * @param {Object} db - SQLite Databse Object
 * @param {Object} bookmark - the bookmark to be inserted
 * @return {Integer} lastID - result of database operation
 */
export async function create(db, bookmark, next) {
  const validationResult = formHelper.validateFormData(bookmark);
  if(validationResult.valid) {
    next(validationResult, (await db.run("INSERT INTO bookmarks (URI, Title, Description, Tags, Date_created) VALUES ($uri, $title, $description, $tags, $date)", {
      $uri: bookmark.uri,
      $title: bookmark.title,
      $description: bookmark.description,
      $tags: bookmark.tags,
      $date: Date(Date.now())
    })).lastID );
  }
  else {
    next(true, bookmark); // ! TODO err, input
  }

}

/**
 * Removes a bookmark entry from the database
 * @module model
 * @function
 * @param {Object} db - SQLite Databse Object
 * @param {Integer} id - the id of the bookmark to be deleted
 * @return undefined
 */
export async function removeEntry(db, id) {
  return (await db.run("DELETE FROM bookmarks WHERE ID = $id", {
    $id: id
  })).changes;
}
