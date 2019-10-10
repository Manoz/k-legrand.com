/* eslint import/no-extraneous-dependencies: 0 */
// This file configures a web server for testing the production build
// on your local machine.

const browserSync = require('browser-sync');
const historyApiFallback = require('connect-history-api-fallback');
const chalk = require('chalk');

/* eslint-disable no-console */

console.log(chalk.cyan('Opening production build...'));

// Run Browsersync
browserSync({
  port: 4000,
  ui: {
    port: 4001,
  },
  server: {
    baseDir: 'public',
  },

  files: [
    'public/*.html',
  ],

  middleware: [historyApiFallback()],
});
