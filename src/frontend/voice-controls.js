import {
    $,
    $$
} from './lib/querySelector';
import {
    startVideo
} from './webcam.js';

const buttonScreenShare = $('#control-screen'),
    buttonWebCam = $('#control-cam'),
    buttonEditor = $('#control-editor'),
    buttonMicrophone = $('#control-mute'),
    voiceChatContainer = $('.voice--users');

const voiceControls = () => {
    if (voiceChatContainer) {
        buttonScreenShare.addEventListener('click', showScreenSharing);
        buttonEditor.addEventListener('click', showCodeSharing);
        buttonMicrophone.addEventListener('click', muteMicrophone);
        buttonWebCam.addEventListener('click', showWebCam);
    }
}

const muteMicrophone = (event) => {
    event.preventDefault();
    alert('Dein Mikrofon ist nun stummgeschaltet.');
} 

const showWebCam = (event) => {
    event.preventDefault();
    /* $('#cam-active-user').srcObject ? stopVideo('#cam-active-user') :  */startVideo('#cam-active-user');
}

const showScreenSharing = (event) => {
    event.preventDefault();
    alert('Dein Bildschirm wird zusätzlich zu deiner Kamera freigegeben..');
}

const showCodeSharing = (event) => {
    event.preventDefault();
    alert('Die Nutzer in deinem Kanal wurden benachrichtigt, dass du deinen Code-Editor freigeben möchtest.');
}

export const register = () => {
    voiceControls();
}

export default register;