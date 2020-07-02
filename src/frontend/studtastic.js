import * as ctxMenu from './contextmenu.js';
import * as chat from './chat.js';
import * as channelStatus from './channel-status.js';
import * as userNote from './user-note.js';
import * as voiceControls from './voice-controls.js';

ctxMenu.register();
chat.register();
userNote.register();
voiceControls.register();
channelStatus.register();