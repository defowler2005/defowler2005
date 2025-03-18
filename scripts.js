'use strict';

//(function() {

/**
 * The main object of the scrips.
 */
const defowler = {
    /**
     * A function for formatting logs.
     * @param {String} type - Message type, types include `INFO` `WARNING` `ERROR` `DEBUG`.
     * @param {String} message - The text to be printed into the console the console.
     */
    writeLog: (type, message) => {
        const validTypes = {
            INFO: 'color: #96d652; background-color: #485b34',
            WARNING: 'color: #ffa365; background-color: #654b39',
            ERROR: 'color: #fe7b7f; background-color: rgb(233, 131, 63)',
            DEBUG: 'color: rgb(230, 207, 0); background-color: #4a4a4a',
        };

        if (!validTypes[type]) {
            console.trace(`%c[WARNING] - Invalid log type used: ${type}`, validTypes.WARNING);
            return;
        }; console.trace(`%c[${type}] - ${message}`, validTypes[type]);
    },
    /**
     * Dynamically redirect the user upon a nav button click.
     * @param {String} pageName - The page button the user clicked.
     */
    handleNavButton: (pageName) => {
        const allpageNames = ['home', 'projects'];
        const isGhPages = window.location.href.includes('.github.io'); // Check if the user is on a GitHub Pages site.

        switch (pageName) {
            case allpageNames[0]:
                window.location.href = isGhPages ? '/defowler2005' : '/'; // Back to the root (index.html).
                break;
            case allpageNames[1]:
                window.location.href = isGhPages ? '/defowler2005/projects' : '/projects.html'; // Headed to the projects page.
                break;
            default:
                defowler.writeLog('WARNING', 'An invalid pageName was supplied at the handleNavButton() function.');
                break;
        }
    },
    /**
     * A list of projects to be displayed.
     */
    projects: [
        {
            name: 'Project Alpha',
            description: 'A cool project.',
            link: 'https://example.com/alpha'
        }
    ],

    /**
     * Sort numbers around.
     * @param {Array<Number>} array - The array of numbers to be sorted.
     * @returns {Array<Number>} - A version of an array which the numbers are sorted from 0 and up.
     */
    sortNumbers: (array) => {
        if (!array) return defowler.writeLog('WARNING', 'You must provide a an array of numbers for the sortNumbers() function.');
        if (Array.isArray(array) === false) return defowler.writeLog('WARNING', 'An invalid variable type was parsed in the sortNumbers() function.');
        return array.sort((a, b) => a - b);
    },
/**
 * Dynamically sets html data to the projects page.
 * @param {String} element - The elements name, class or id.
 * @returns 
 */
    generateProjects: (element) => {
        const container = document.getElementById(element);

        if (!container) {
            defowler.writeLog('ERROR', 'Could not find the container.');
            return;
        }

        container.innerHTML = '';

        if (defowler.projects.length === 0) {
            container.innerHTML = '<p>No projects available.</p>';
            return;
        }

        defowler.projects.forEach((project) => {
            const projectDiv = document.createElement('div');
            projectDiv.classList.add('projectCard');
            projectDiv.innerHTML = `
                <h3>${project.name}</h3>
                <p>${project.description}</p>
                <a href="${project.link}" target="_blank">View Project</a>
            `;
            container.appendChild(projectDiv);
        });

        defowler.writeLog('INFO', 'Projects loaded successfully.');
    }
};

document.addEventListener('DOMContentLoaded', () => {
    const isMobile = /Mobile|Android|iPhone|iPad|iPod|Windows Phone/i.test(navigator.userAgent);
    const isAppleProduct = /iPhone|iPad|iPod|Apple/i.test(navigator.userAgent);

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
        }; document.body.appendChild(script);
    } else defowler.writeLog('INFO', 'Eruda was not loaded as the user already has a console.');
    //Check for Apple products.
    if (isAppleProduct) defowler.writeLog("WARNING", "Client is an apple user!");
    if (window.location.pathname === '/projects.html') defowler.generateProjects('projectsPanel');
});
//})();
