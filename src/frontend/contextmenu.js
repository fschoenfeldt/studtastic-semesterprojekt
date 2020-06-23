import ContextMenu from './lib/tui-context-menu';

const registerUserContextMenu = () => {
    const contextMenuContent = [{
            title: 'Stummschalten'
        },
        {
            title: 'Einladen',
            menu: [{
                    title: 'Sprachkanal',
                    command: 'invite-voice'
                },
                {
                    title: 'Textkanal',
                    command: 'invite-text'
                }
            ]
        }
    ]
   
    const userContextMenu = new ContextMenu(document.getElementById('sidebar--user__ctx-menu'));

    const users = document.querySelectorAll('div.users > p');
    users.forEach((elem) => userContextMenu.register(`#${elem.id}`, onClick, contextMenuContent));

    function onClick(e, cmd) {
        console.log(cmd);
    }
}

export const register = () => {
    registerUserContextMenu();
}

export default register;