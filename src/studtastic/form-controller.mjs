import * as model from "./model.mjs";

/**
 * Shows "views/inputForm.html"
 * @module form-controller
 * @function add
 * @param {Object} - the context of koa
 * @return undefined
 */
export async function add(ctx) {
  await ctx.render('bookmark-form' /* ... */ );
}

/**
 * Inserts Bookmark into db
 * @module form-controller
 * @function addAction
 * @param {Object} - the context of koa
 * @return undefined
 */
export async function addAction(ctx) {

  model.create(ctx.db, ctx.req.body, (validationResult) => { // TODO
    if (!err) {
      ctx.redirect("/"); // !TODO redirect to entry
    } else {
      ctx.redirect("/500"); // !TODO redirect to form with error etc
      // await ctx.render('bookmark-form' /* ... */); // !TODO
    }
  });

}
