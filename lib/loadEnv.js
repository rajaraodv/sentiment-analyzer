/**
 * This file checks if environment variables are set and logs appropriately
 */
const messages = require('./messages');
const colors = require('colors');


/**
 * The following loads environment variables from .env file.
 */
require('dotenv').config();

/**
 * Warn people to set GITHUB_API_TOKEN and bail
 */
if (!process.env.GITHUB_API_TOKEN) {
    console.log(colors.red(messages.missingGithubAPI));
    process.exit(0);
}

/**
 * Print the port
 */
console.log(colors.rainbow(`${messages.serverPort} ${process.env.PORT || 3000}`));