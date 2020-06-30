import {
    $,
    $$
} from './lib/querySelector';

const buttonScreenShare = $('#control-screen'),
    buttonEditor = $('#control-editor'),
    voiceChatContainer = $('.voice--users');

const voiceControls = () => {
    if (voiceChatContainer) {
        buttonScreenShare.addEventListener('click', showScreenSharing);
        buttonEditor.addEventListener('click', showCodeSharing);
    }
}

const showScreenSharing = (event) => {
    event.preventDefault();

    // !TODO !IMPORTANT display screensharing here
    alert('Dein Bildschirm wird freigegeben..');
}

const showCodeSharing = (event) => {
    event.preventDefault();

    // !TODO !IMPORTANT display screensharing here
    alert('Dein Editor wird freigegeben..');
}

export const register = () => {
    voiceControls();
}

export default register;