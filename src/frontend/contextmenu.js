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
    const statusContextMenu = new ContextMenu($('#threadsidebar--status__ctx-menu'));

    statusContextMenu.register('#channel--status', onClick, contextMenuContent)
}

// Hier könnte man beim Klick je nach cmd tolle Dinge machen
const onClick = (e, cmd) => {
    console.log(cmd);
    switch (cmd) {
        case 'mute':
            alert('ist jetzt stummgeschaltet');
            break;
        
        case '1':
            setChannelStatus('Warten auf Beginn der Veranstaltung')
            break;
        case '2':
            setChannelStatus('Ansprache');
            break;
        case '3':
            setChannelStatus('Offene Fragerunde');
            break;
        case '4':
            setChannelStatus('Eigenverantwortlicher Lernanteil');
            // !TODO !IMPORTANT einen weiteren nutzer hier hinzufügen
            break;
    }
}

const setChannelStatus = (status) => {
    $('.channel--status_title').innerHTML = status;
}

export const register = () => {
    registerUserContextMenu();
    registerStatusContextMenu();
}

export default register;