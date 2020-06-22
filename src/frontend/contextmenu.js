import ContextMenu from './lib/tui-context-menu';

const registerUserContextMenu = () => {
    const container = document.getElementById('fl');
    const userContextMenu = new ContextMenu(container);

    function onClick(e, cmd) {
        console.log(cmd);
    }

    userContextMenu.register('#target', onClick, [{
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
        },
        {
            title: 'Blub'
        }
        /* {separator: true},
        {title: 'Rename'},
        {title: 'Delete'},
        {title: 'Copy', disable: true},
        {title: 'Paste', disable: true} */
    ]);
}

export const register = () => {
    registerUserContextMenu();
}

export default register;