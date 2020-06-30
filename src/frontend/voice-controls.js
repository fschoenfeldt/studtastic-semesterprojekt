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
    voiceChatContainer = $('.voice--users');

const voiceControls = () => {
    if (voiceChatContainer) {
        buttonScreenShare.addEventListener('click', showScreenSharing);
        buttonEditor.addEventListener('click', showCodeSharing);
        buttonWebCam.addEventListener('click', showWebCam);
    }
}

const showWebCam = (event) => {
    event.preventDefault();
    /* $('#cam-active-user').srcObject ? stopVideo('#cam-active-user') :  */startVideo('#cam-active-user');
}

const showScreenSharing = (event) => {
    event.preventDefault();

    // !TODO !IMPORTANT display screensharing here
    alert('Dein Bildschirm wird freigegeben..');
}

const showCodeSharing = (event) => {
    event.preventDefault();

    // !TODO !IMPORTANT display codesharing here
    alert('Dein Editor wird freigegeben..');
}

export const register = () => {
    voiceControls();
}

export default register;