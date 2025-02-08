'use strict';

//(function() {

/**
 * The main object of the scrips
 */
const defowler = {
    /**
     * A function for formatting logs.
     * @param {String} type - Message type, types include `INFO` `WARNING` `ERROR`.
     * @param {String} message - The text to be printed into the console the console.
     */
    writeLog: (type, message) => {
        const validTypes = ['INFO', 'WARNING', 'ERROR'];

        if (!type || validTypes.includes(type) === false) return console.trace(`%c[${validTypes[1]}] - You must include a valid message type for the usage of writeLog(). Valid types include ${validTypes.join(', ')}.`, `color: #ffa365; background-color: #654b39;`);
        if (!message) return console.trace(`%c[${validTypes[1]}] - You must include a message for the usage of writeLog().`, `color: #ffa365; background-color: #654b39;`);

        switch (type) {
            case validTypes[0]:
                console.trace(`%c[${type}] - ${message}`, `color: #96d652; background-color: #485b34`);
                break;
            case validTypes[1]:
                console.trace(`%c[${type}] - ${message}`, `color: #ffa365; background-color: #654b39`);
                break;
            case validTypes[2]:
                console.trace(`%c[${type}] - ${message}`, `color: #fe7b7f; background-color: #694143`);
                break;
            default:
                console.trace(`%c[${type}] - Type ${type} is an invalid usage for the writeLog() function, types include: INFO, WARNING, ERROR`, `color: #ffa365; background-color: #654b39`);
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
        const isGhPages = window.location.href.includes('.github.io');
        
        switch (pageName) {
            case allpageNames[0]:
                window.location.href = isGhPages ? '/defowler2005': '/'; // Back to the root (index.html).
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
    const isMobile = /Mobile|Android|iPhone|iPad|iPod|Windows Phone/i.test(navigator.userAgent);
    const isAppleProduct = /iPhone|iPad|iPod/i.test(navigator.userAgent);

    if (isMobile) {  // Checks if the client is on a mobile device
        const script = document.createElement('script');
        script.src = 'https://cdn.jsdelivr.net/npm/eruda';
        script.onload = () => {
            if (typeof eruda !== 'undefined') {
                eruda.init();
                defowler.writeLog('INFO', 'Eruda successfully loaded. You now have a console on your phone!');
            } else {
                defowler.writeLog('WARN', 'Eruda could not be initialized; Eruda appears undefined.');
            }
        };
        script.onerror = () => {
            defowler.writeLog('ERROR', 'Failed to load Eruda script.');
        };
        document.body.appendChild(script);
    } else {
        defowler.writeLog('INFO', 'Eruda was not loaded as the user already has a console.');
    }
    //Check for Apple products.
    if (isAppleProduct) defowler.log("WARNING", "Client is an apple user!");
})
//})();
