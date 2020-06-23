import ContextMenu from './lib/tui-context-menu';

const registerUserContextMenu = () => {
    // Kontextmenü-Einstellungen
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

    // Kontextmenü finden und einstellen
    const userContextMenu = new ContextMenu(document.getElementById('sidebar--user__ctx-menu'));

    // Benutzer finden und Kontextmenü bei Klick dort anzeigen lassen
    const users = document.querySelectorAll('div.users > p');
    users.forEach((elem) => userContextMenu.register(`#${elem.id}`, onClick, contextMenuContent));

    // Hier könnte man beim Klick je nach cmd tolle Dinge machen
    function onClick(e, cmd) {
        console.log(cmd);
    }
}

export const register = () => {
    registerUserContextMenu();
}

export default register;