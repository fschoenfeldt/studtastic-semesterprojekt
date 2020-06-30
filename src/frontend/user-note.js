import {
    $,
    $$
} from './lib/querySelector';

const showUserNote = () => {
    const voiceChatContainer = $('.voice--users');
    const currentUser = $('.current-user');
    const firstUser = $('#user-4');
    const userNoteButton = $('#link-note');
    userNoteButton.addEventListener("click", (event) => {
        console.log(currentUser);
        console.log(userNoteButton);

        // move current user above first user
        
        currentUser.classList.toggle('note-active');

        if(voiceChatContainer && voiceChatContainer.childElementCount == 1) {
            // add one person to voice channel
            $('.voice--users').appendChild(document.createElement("div"));
        } else {
            // nothing..?
        }
        event.preventDefault();
    });
}

export const register = () => {
    showUserNote();
}

export default register;