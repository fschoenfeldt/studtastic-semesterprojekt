import Router from "@koa/router";
import * as controller from "./controller.mjs";

// Define a new Router
const router = new Router();

// Assign Routes
router.get('/', controller.indexAction);
router.post('/loginAction', controller.loginAction);
router.get('/overview', controller.overviewAction);
router.get('/channel', controller.channelAction);
router.get('/thread/voice', controller.voiceThreadAction);
router.get('/thread/voice/private', controller.privateVoiceThreadAction);
router.get('/logout', controller.logoutAction);
// router.get('/bookmark/add', formController.add);
// router.post('/bookmark/add', formController.submitForm);
// router.get('/bookmark/:ID', controller.showAction);
// router.get('/bookmark/:ID/edit', formController.edit);
// router.get('/bookmark/:ID/edit', formController.submitForm);
// router.get('/bookmark/:ID/delete', controller.removeConfirmationAction);
// router.post('/bookmark/:ID/delete', controller.removeAction);

export default router;
