// Imports
import util from 'util';

// Prints arguments to console and returns them for inline logging.
// log :: ...T -> ...T
export function log(...args) {
  console.log(util.formatWithOptions({
    colors: true
  }, ...args));
  return args[args.length - 1];
}
