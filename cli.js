#!/usr/bin/env node

const shell = require('shelljs')
const fs = require('fs');

if (!shell.which('git')) {
  shell.echo('Sorry, this script requires GIT');
  shell.exit(1);
}

const program = require('commander');
//console.log(process.platform);
//['aix','darwin','freebsd','linux','openbsd','sunos','win32']

program
  .version('1.0.7')
  .action(() => {
    console.log("\n \n 🔥 Welcome to the Kasfy CLI  🔥 Version : 1.0.7 🔥\n \n");
  });

program
  .command('serve')
  .alias('dev')
  .description('✅ Serve the application')
  .action(() => {

	if (!fs.existsSync('./node_modules'))
	{
		console.log("\n ❌ Not Found `node_modules` directory. \n");
		console.log("\n ❗️ run command: npm install  \n");
		process.exit(1);
	}

    const npm = require("npm");
    npm.load();
    npm.load(() => npm.run("start"));

  });
  

if (process.platform == 'linux') {
  program
    .command('new <projectname>') // No need of specifying arguments here
    .alias('create')
    .description('create new project')
    .action((projectname) => {
      var path = shell.pwd();
      shell.cd(path);
      shell.exec('git clone https://github.com/kasfy/kasfy.git');
      console.log("🔥 kasfy cli creating new project");
      shell.exec('mv kasfy '+projectname);
      console.log("✅ Ready new project as "+projectname);
  });
} else if (process.platform == 'win32') {
  program
    .command('new <projectname>') // No need of specifying arguments here
    .alias('create')
    .description('create new project')
    .action((projectname) => {
      var path = shell.pwd();
      shell.cd(path);
      shell.exec('git clone https://github.com/kasfy/kasfy.git');
      console.log("🔥 kasfy cli creating new project");
      shell.exec('rename kasfy '+projectname);
      console.log("✅ Ready new project as "+projectname);
  });
} else {
  program
    .command('new <projectname>') // No need of specifying arguments here
    .alias('create')
    .description('create new project')
    .action((projectname) => {
      var path = shell.pwd();
      shell.cd(path);
      shell.exec('git clone https://github.com/kasfy/kasfy.git');
      console.log("🔥 kasfy cli creating new project");
      shell.exec('mv kasfy '+projectname);
      console.log("✅ Ready new project as "+projectname);
  });
}

program.parse(process.argv);

//const clone = require('./lib/clone.js')

//console.log("welcome to kasfy cli");