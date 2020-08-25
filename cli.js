#!/usr/bin/env node

const shell = require('shelljs')

if (!shell.which('git')) {
  shell.echo('Sorry, this script requires GIT');
  shell.exit(1);
}

const clone = require('./lib/clone.js')

//console.log("welcome to kasfy cli");