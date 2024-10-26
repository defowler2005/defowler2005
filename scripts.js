'use strict';

/**
 * The main object of the scrips
 */
const defowler = {
    /**
     * A function for formmated consoling.
     * @param {String} type - Message type, types include `INFO` `WARNING` `ERROR`.
     * @param {String} message - 
     */
    writeLog: (type, message) => {
        let color;
        let b_color;
        const validTypes = ['INFO', 'WARNING', 'ERROR'];

        if (!type || !validTypes.includes(type)) return console.log(`%c[WARNING] - You must include a valid message type for the usage of writeLog(). Valid types include ${validTypes.join(', ')}.`, `color: #ffa365; background-color: #654b39;`);
        if (!message) return console.warn(`%c[WARNING] - You must include a message for the usage of writeLog().`, `color: #ffa365; background-color: #654b39;`);
        const formattedType = type.toUpperCase();

        switch (formattedType) {
            case 'INFO':
                b_color = '#485b34';
                color = '#96d652';
                break;
            case 'WARNING':
                b_color = '#654b39';
                color = '#ffa365';
                break;
            case 'ERROR':
                b_color = '#694143';
                color = '#fe7b7f';
                break;
            default:
                b_color = '#f8d7da';
                color = '#96d652';
                message = `Type ${type} is an invalid usage for the writeLog() function, types include: INFO, WARNING, ERROR`;
                break;
        } console.log(`%c[${formattedType}] - ${message}`, `color: ${color}; background-color: ${b_color}`);
    }
};

window.onload = () => {
    const isNonComputer = /Mobile|Android|iPhone|iPad|iPod|Windows Phone/i.test(navigator.userAgent);

    if (isNonComputer) eruda.init();
    else defowler.writeLog('INFO', 'Eruda not loaded as a result of the user is on a computer device!');
};