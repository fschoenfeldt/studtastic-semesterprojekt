// https://developer.mozilla.org/en-US/docs/Archive/Add-ons/Code_snippets/QuerySelector
export const $ = (selector, el) => {
    if (!el) {el = document;}
    return el.querySelector(selector);
}
export const $$ = (selector, el) => {
    if (!el) {el = document;}
    return el.querySelectorAll(selector);
    // Note: the returned object is a NodeList.
    // If you'd like to convert it to a Array for convenience, use this instead:
    // return Array.prototype.slice.call(el.querySelectorAll(selector));
}

export default $;