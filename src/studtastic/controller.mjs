import * as model from "./model.mjs";
import Debug from 'debug';
const debug = Debug("studtastic-controller");

/**
 * Handles -list all boomarks- request from the browser and sends it to the model
 * @module controller
 * @function
 * @param {Object} - the context of koa
 * @return undefined
 */
export const indexAction = async (ctx) => {
  await ctx.render("index");
}

/**
 * Handles Login POST Action
 * @module controller
 * @function
 * @param {Object} - the context of koa
 * @return undefined
 */
export const loginAction = async (ctx) => {
  ctx.body = ctx.request.body;
  ctx.session.user, ctx.state.user = ctx.request.body.login;
  ctx.redirect('/overview');
}

export const overviewAction = async (ctx) => {
  await ctx.render('overview');
}

// /**
//  * Handles -show bookmark- request from the browser and sends it to the model
//  * @module controller
//  * @function
//  * @param {Object} - the context of koa
//  * @return undefined
//  */
// export async function showAction(ctx) {
//   await ctx.render("show", {
//     entry: await model.getById(ctx.db, ctx.params.ID)
//   });
// }

// /**
//  * Handles -remove bookmark- request from the browser and sends it to the model
//  * @module controller
//  * @function
//  * @param {Object} - the context of koa
//  * @return undefined
//  */
// export async function removeConfirmationAction(ctx) {
//   await ctx.render("confirm-delete", {
//     entry: {
//       // TODO: eventually add more information for removeEntry confirmation
//       ID: ctx.params.ID
//     }
//   });
// }

// /**
//  * Handles -remove bookmark confirmation- request from the browser and sends it to the model
//  * @module controller
//  * @function
//  * @param {Object} - the context of koa
//  * @return undefined
//  */
// export async function removeAction(ctx) {
//   ctx.render("success-delete", {
//     message: await model.removeEntry(ctx.db, ctx.params.ID)
//   })
// }

// /**
//  * Handles -edit bookmark- request from the browser and sends it to the model
//  * @module controller
//  * @function
//  * @param {Object} - the context of koa
//  * @return undefined
//  */
// export async function editAction(ctx) {
//   // TODO: add form in 06-Formular
//   await ctx.render("edit");
// }
