import ContextMenu from './lib/tui-context-menu';

const registerUserContextMenu = () => {
    const container = document.getElementById('fl');
    const userContextMenu = new ContextMenu(container);
    
    function onClick(e, cmd) {
        console.log(cmd);
    }
    
    userContextMenu.register('#target', onClick, [
        {title: 'New Folder'},
        {
            title: 'New File',
            menu: [
                {title: '20170101.xls'},
                {title: 'image.png', command: 'export-to-png'},
                {title: 'image.jpg', command: 'export-to-jpg'}
            ]
        },
        {separator: true},
        {title: 'Rename'},
        {title: 'Delete'},
        {title: 'Copy', disable: true},
        {title: 'Paste', disable: true}
    ]);
}

export const run = () => {
    registerUserContextMenu();
}

export default run;
