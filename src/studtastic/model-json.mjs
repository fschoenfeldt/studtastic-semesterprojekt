// Imports
import util from 'util';
import * as fs from 'fs';
const readFileAsync = util.promisify(fs.readFile);

/**
 * Parses JSON File and returns it
 * @module cli
 * @function
 * @param {String} path - Path of json file
 * @return {Objekt} json - Parsed Json
 */
export async function getJson(path) {
  const json = await readFileAsync(path);
  let parsedJson = JSON.parse(json);
  return parsedJson;
}


/**
 * Get all bookmarks
 * @module cli
 * @function
 * @param {String} path - Path of json file
 * @return {Objekt} json - JSON
 */
export async function getAll(path) {
  return await getJson(path);
}

/**
 * Gets an entry by UriHash
 * @module cli
 * @function
 * @param {String} path - Path of json file
 * @param {String} hash - UriHash of entry
 * @return {Objekt} entry - entry
 */
export async function getById(path, hashId) {
  return (await getJson(path)).filter(elem => elem.UriHash.indexOf(hashId) == 0)[0];
}
