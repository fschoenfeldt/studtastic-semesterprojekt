import {
    $,
    $$
} from './lib/querySelector';

// https://stackoverflow.com/a/49389811
const submitTextareaOnSubmit = (event) => {
    if (event.which === 13 && !event.shiftKey) {
        event.target.form.dispatchEvent(new Event("submit", {
            cancelable: true
        }));
        event.preventDefault(); // Prevents the addition of a new line in the text field (not needed in a lot of cases)
        console.log(event.target.value);
        alert(`Deine Nachricht: ${event.target.value}
        (Füg mich in den Chat ein)`);


        const chatMessagesContainer = $('.chat--messages');
        /* !TODO !IMPORTANT actually insert Chatmessage to chat
        chatMessagesContainer.appendChild(createChatMessage({
            time: "jetzt",
            author: "ich",
            text: event.target.value
        })); */
        console.table(chatMessagesContainer)
        event.target.value = "";
    }
}

const createChatMessage = ({
    time,
    author,
    text
}) => {
    // !TODO write function for creating DOM element here
    // https://developer.mozilla.org/de/docs/Web/API/Document/createElement
    /*
    
    <div class="message">
        <small>{{message.time}} von {{message.author}}</small>
        <p>{{message.text}}</p>
    </div>
    
    */
}

export const register = () => {
    if ($("#chatMessage") && $("#chatInput")) {
        $("#chatMessage").addEventListener("keypress", submitTextareaOnSubmit);
        $("#chatInput").addEventListener("submit", (event) => {
            event.preventDefault();
        });
    }
}

export default submitTextareaOnSubmit;