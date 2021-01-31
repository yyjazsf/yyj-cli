#!/usr/bin/env node

// const fs = require('fs');
// const path = require('path');
const program = require('commander');
const { cleanArgs } = require('@yyj/cli-shared-utils');
const pkg = require('../package.json');

const { argv } = process;

program
  .version(`@yyj/cli ${pkg.version}`)
  .usage('<command> [options]');

program
  .command('create <app-name>')
  .description('create a project')
  .option('--ts, --typescript', 'use typescript')
  .action((name, cmd) => {
    console.log('cmd', cmd);

    const options = cleanArgs(cmd);
    console.log('options', options);
  });

program.parse(argv);

if (process.argv.length < 3) {
  program.outputHelp();
}
