/**
 * Returns a formatted String of Tags, prepending "#" to every element
 * @module cli
 * @function
 * @param {String} string - a list of tags
 * @return {String} formattedString - formatted string, prepending "#" to every element
 */
export function formatTags(string) {
  return (string.split(',').map((elem => `#${elem.split(" ").join("")}`)).join(" "));
}
/**
 * Returns a formatted String of Date in format: DD.MM.YYYY
 * @module cli
 * @function
 * @param {String} string - unformatted date String
 * @return {String} formattedString - formatted string in format: DD.MM.YYYY
 */
export function formatDate(string) {
  const date = new Date(string);
  return `${date.getDay()}.${date.getMonth()}.${date.getFullYear()}`;
}
