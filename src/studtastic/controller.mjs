import * as model from "./model.mjs";
import Debug from 'debug';
const debug = Debug("studtastic-controller");

const studtasticObject = {
  user: {
    username: null,
    password: null
  },
  channel: {
    name: null
  }
}

/**
 * Handles -list all boomarks- request from the browser and sends it to the model
 * @module controller
 * @function
 * @param {Object} - the context of koa
 * @return undefined
 */
export const indexAction = async (ctx) => {
  ctx.session.studtastic = studtasticObject;
  await ctx.render("pages/00-index", {
    user: ctx.session.studtastic.user,
    channel: ctx.session.studtastic.channel
  });
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

  ctx.session.studtastic.user = ctx.request.body.login;

  ctx.redirect('/overview');
}

/**
 * Shows the channel selection
 * @module controller
 * @function
 * @param {Object} - the context of koa
 * @return undefined
 */
export const overviewAction = async (ctx) => {
  debug(ctx.session.studtastic)
  await ctx.render("pages/01-overview", {
    user: ctx.session.studtastic.user,
    channel: ctx.session.studtastic.channel
  });
}

export const channelAction = async (ctx) => {
  debug(ctx.session.studtastic);
  ctx.session.studtastic.channel.name = ctx.request.query.name;

  await ctx.render("pages/03-channel", {
    user: ctx.session.studtastic.user,
    channel: ctx.session.studtastic.channel
  });
}

export const logoutAction = async (ctx) => {
  ctx.session = null;
  ctx.redirect('/');
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