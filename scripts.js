'use strict';

/**
 * The main object of the scrips
 */
const defowler = {
    /**
     * A function for formmated consoling.
     * @param {String} type - Message type, types include `INFO` `WARNING` `ERROR`.
     * @param {String} message - The text to be printet intto the console.
     */
    writeLog: (type, message) => {
        const validTypes = ['INFO', 'WARNING', 'ERROR'];

        if (!type || validTypes.includes(type) === false) return console.log(`%c[${validTypes[1]}] - You must include a valid message type for the usage of writeLog(). Valid types include ${validTypes.join(', ')}.`, `color: #ffa365; background-color: #654b39;`);
        if (!message) return console.log(`%c[${validTypes[1]}] - You must include a message for the usage of writeLog().`, `color: #ffa365; background-color: #654b39;`);

        switch (type) {
            case validTypes[0]:
                console.log(`%c[${type}] - ${message}`, `color: #96d652; background-color: #485b34`);
                break;
            case validTypes[1]:
                console.warn(`%c[${type}] - ${message}`, `color: #ffa365; background-color: #654b39`);
                break;
            case validTypes[2]:
                console.error(`%c[${type}] - ${message}`, `color: #fe7b7f; background-color: #694143`);
                break;
            default:
                console.warn(`%c[${type}] - Type ${type} is an invalid usage for the writeLog() function, types include: INFO, WARNING, ERROR`, `color: #ffa365; background-color: #654b39`);
                break;
        };
    },
    /**
     * Dynamically redirect the user upon a nav button click.
     * @param {String} pageName - The page button the user clicked.
     */
    handleNavButton: (pageName) => {
        const allpageNames = ['home', 'projects'];

        if (allpageNames.includes(pageName) === false) return defowler.writeLog('WARNING', 'An invalid pageName was supplied at the handleNavButton() function.');

        switch (pageName) {
            case allpageNames[0]:
                window.location.href = '/'; // Back to the root (index.html).
                break;
            case allpageNames[1]:
                window.location.href = '/projects.html'; // Headed to the projects page.
                break;
            default:
                break;
        }
    },
    /**
     * Sort numbers around.
     * @param {Array<Number>} array - The array to be sorted.
     * @returns {Array<Number>} - A version of an array which the numbers are sorted from 0 to 10 an up.
     */
    sortNumbers: (array) => {
        if (!array) return defowler.writeLog('WARNING', 'You must provide a an array of numbers for the sortNumbers() function.');
        if (Array.isArray(array) === false) return defowler.writeLog('WARNING', 'An invalid variable type was parsed in the sortNumbers() function.');
        return array.sort((a, b) => a - b);
    }
};

document.addEventListener('DOMContentLoaded', () => {
    const hasConsole = /Mobile|Android|iPhone|iPad|iPod|Windows Phone/i.test(navigator.userAgent);

    if (hasConsole) { // Does the client have a console?
        if (typeof eruda !== 'undefined') {
            eruda.init();
            defowler.writeLog('INFO', 'Eruda successfully loaded you now have a console on your phone!');
        } else defowler.writeLog('WARN', 'Eruda could not be loaded, eruda looks to be undefined. Sorry, phone users!');
    } else defowler.writeLog('INFO', 'Eruda was not loaded as the user already has a console.');
});