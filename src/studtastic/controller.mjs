// import * as model from "./model.mjs";
import Debug from 'debug';
import {defaultChatMessages} from './helper/messages.js';

const debug = Debug("studtastic-controller");

const admins = ['hiep', 'dozent', 'admin'];

const studtasticObject = {
  user: {
    isAdmin: false,
    username: null,
    password: null,
    isInThread: null
  },
  channel: {
    name: null,
    status: 'Warten auf Beginn der Veranstaltung'
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
  const isUserAdmin = admins.some((elem) => {
    return elem == ctx.request.body.login.username
  });
  debug(`is user admin? --> ${isUserAdmin}`);

  // passwort wieder löschen
  ctx.request.body.login.password = null;

  ctx.session.studtastic.user = {
    ...studtasticObject.user,
    isAdmin: isUserAdmin,
    ...ctx.request.body.login
  };
  debug(ctx.session.studtastic);

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

/**
 * Shows a single channel
 * @module controller
 * @function
 * @param {Object} - the context of koa
 * @return undefined
 */
export const channelAction = async (ctx) => {
  debug(ctx.session.studtastic);
  ctx.session.studtastic.channel.name = ctx.request.query.name;

  await ctx.render("pages/03-channel", {
    user: ctx.session.studtastic.user,
    channel: ctx.session.studtastic.channel,
    messages: defaultChatMessages
  });
}

/**
 * Shows a voice thread
 * @module controller
 * @function
 * @param {Object} - the context of koa
 * @return undefined+
 */
export const voiceThreadAction = async (ctx) => {
  let showPseudoStudent = false;
  debug(ctx.session.studtastic);

  // Als Student: Veranstaltungsstatus auf "Ansprache" setzen
  if(!ctx.session.studtastic.user.isAdmin)
    ctx.session.studtastic.channel.status = 'Ansprache & Fragerunde'
  else
    showPseudoStudent = true;

  ctx.session.studtastic.user.isInThread = `voice-public`;

  await ctx.render("pages/04-voice-thread", {
    user: ctx.session.studtastic.user,
    channel: ctx.session.studtastic.channel,
    isInThread : ctx.session.studtastic.user.isInThread ,
    showPseudoStudent : showPseudoStudent
  });
}

/**
 * Shows a private voice thread
 * @module controller
 * @function
 * @param {Object} - the context of koa
 * @return undefined
 */
export const privateVoiceThreadAction = async (ctx) => {
  debug(ctx.session.studtastic);

  ctx.session.studtastic.user.isInThread = `voice-private-${ctx.request.query.id}`;

  if(ctx.session.studtastic.user.isAdmin) {
    ctx.session.studtastic.channel.status = 'Eigenverantwortlicher Lernanteil';
  }

  await ctx.render("pages/05-private-voice-thread", {
    user: ctx.session.studtastic.user,
    channel: ctx.session.studtastic.channel,
    isInThread : ctx.session.studtastic.user.isInThread 
  });
}

/**
 * Logs out and redirects to the index page
 * @module controller
 * @function
 * @param {Object} - the context of koa
 * @return undefined
 */
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