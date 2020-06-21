// Imports
import {
  formatTags,
  formatDate
} from "./helper/format.mjs";

/**
 * Returns a formatted String of a bookmark
 * @module cli
 * @function
 * @param {Object} bookmark - a bookmark object
 * @return {String} bookmark - a formatted String
 */
export function viewTeaser(bookmark) {
  return `
${bookmark.Title} (${bookmark.ID})
${bookmark.Description}\n\n${bookmark.URI}
Saved on ${formatDate(bookmark.Date_created)}
${formatTags(bookmark.Tags)}`;
}

/**
 * Returns a formatted String of a bookmark-list
 * @module cli
 * @function
 * @param {Object} bookmark - a bookmarks object
 * @return {String} bookmark - a formatted String
 */
export function viewFull(bookmark) {
  return `${bookmark.Title} (${bookmark.ID})
${bookmark.URI}
${formatTags(bookmark.Tags)}
`;
}
