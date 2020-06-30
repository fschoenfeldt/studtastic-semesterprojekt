import {
    $,
    $$
} from './lib/querySelector';

const showUserNote = () => {
    const voiceChatContainer = $('.voice--users');
    const currentUser = $('.current-user');
    const firstUser = $('#user-4');
    const userNoteButton = $('#link-note');

    if (userNoteButton) {
        userNoteButton.addEventListener("click", (event) => {
            currentUser.classList.toggle('note-active');
            if (voiceChatContainer && voiceChatContainer.childElementCount == 1) {
                // add one person to voice channel
                $('.voice--users').appendChild(document.createElement("div"));
            } else {
                // nothing..?
            }
            event.preventDefault();
        });
    }
}

export const register = () => {
    showUserNote();
}

export default register;