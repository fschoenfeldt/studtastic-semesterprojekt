import {
    $,
    $$
} from './lib/querySelector';

const possibleStatus = ['Warten auf Beginn der Veranstaltung', 'Ansprache', 'Offene Fragerunde', 'Eigenverantwortlicher Lernanteil'];

const statusTitle = $('.channel--status_title'),
    statusPrevButton = $('#channel--status_last'),
    statusNextButton = $('#channel--status_next');

const registerChannelStatusChange = () => {
    if (statusTitle && statusPrevButton && statusNextButton) {
        statusNextButton.addEventListener('click', (event) => {
            setChannelStatus(true, statusTitle.innerHTML);
        });
        statusPrevButton.addEventListener('click', (event) => {
            setChannelStatus(false, statusTitle.innerHTML);
        });
    } else {
        console.info('Not all status buttons detected, you are probably not administrator!');
    }
}

/**
 * Sets the status title based on the parameters given
 * @param {Boolean} shouldIncrement - incremet?
 * @param {String} currentChannelStatus 
 */
const setChannelStatus = (shouldIncrement, currentChannelStatus) => {
    const indexOfCurrentStatus = possibleStatus.findIndex((val, i) => {
        return val == currentChannelStatus;
    });
    shouldIncrement ? statusTitle.innerHTML = possibleStatus[indexOfCurrentStatus + 1] : statusTitle.innerHTML = possibleStatus[indexOfCurrentStatus - 1];
}

export const register = () => {
    registerChannelStatusChange();
}