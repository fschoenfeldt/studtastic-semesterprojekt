import {
    $,
    $$
} from './lib/querySelector';
import ContextMenu from './lib/tui-context-menu';

const registerUserContextMenu = () => {
    // Kontextmenü-Einstellungen
    const contextMenuContent = [{
            title: 'Stummschalten',
            command: 'mute'
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
    const userContextMenu = new ContextMenu($('#sidebar--user__ctx-menu'));

    // Benutzer finden und Kontextmenü bei Klick dort anzeigen lassen
    const usersUserSidebar = $$('div.users > p');
    usersUserSidebar.forEach((elem) => userContextMenu.register(`#${elem.id}`, onClick, contextMenuContent));
    
    const usersThreadSidebar = ['#sidebar-user-1', '#sidebar-user-2', '#sidebar-user-3', '#sidebar-user-4', '#sidebar-user-5']
    usersThreadSidebar.forEach((selector) => {
        const threadSidebarUser = $(selector);
        if (threadSidebarUser)
            userContextMenu.register(`#${threadSidebarUser.id}`, onClick, contextMenuContent)
    });
    
    // Hier könnte man beim Klick je nach cmd tolle Dinge machen
    function onClick(e, cmd) {
        console.log(cmd);
        switch (cmd) {
            case 'mute':
                alert('ist jetzt stummgeschaltet');
                break;
        }
    }
}

const registerStatusContextMenu = () => {
    // Kontextmenü-Einstellungen
    const contextMenuContent = [{
            title: 'Warten auf Beginn d. V.',
            command: '1'
        },
        {
            title: 'Ansprache',
            command: '2'
        },
        {
            title: 'Offene Fragerunde',
            command: '3'
        },
        {
            title: 'Eigenverantwortlicher Lernanteil',
            command: '4'
        }
    ]

    // Kontextmenü finden und einstellen
    const userContextMenu = new ContextMenu($('#sidebar--user__ctx-menu'));

    // Benutzer finden und Kontextmenü bei Klick dort anzeigen lassen
    const usersUserSidebar = $$('div.users > p');
    // !TODO !IMPORTANT Außerdem User in der Threadsidebar benutzen!
    // const usersThreadSidebar
    usersUserSidebar.forEach((elem) => userContextMenu.register(`#${elem.id}`, onClick, contextMenuContent));

    // Hier könnte man beim Klick je nach cmd tolle Dinge machen
    function onClick(e, cmd) {
        // !TODO !IMPORTANT implement
        console.log(cmd);
        switch (cmd) {
            case 'mute':
                alert('ist jetzt stummgeschaltet');
                break;
        }
    }
}

export const register = () => {
    registerUserContextMenu();
    registerStatusContextMenu();
}

export default register;