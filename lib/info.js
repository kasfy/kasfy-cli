#!/usr/bin/env node
/* The NodeJS Framework for Smart Back-End
   ▄█   ▄█▄    ▄████████    ▄████████    ▄████████ ▄██   ▄   
  ███ ▄███▀   ███    ███   ███    ███   ███    ███ ███   ██▄ 
  ███▐██▀     ███    ███   ███    █▀    ███    █▀  ███▄▄▄███ 
 ▄█████▀      ███    ███   ███         ▄███▄▄▄     ▀▀▀▀▀▀███ 
▀▀█████▄    ▀███████████ ▀███████████ ▀▀███▀▀▀     ▄██   ███ 
  ███▐██▄     ███    ███          ███   ███        ███   ███ 
  ███ ▀███▄   ███    ███    ▄█    ███   ███        ███   ███ 
  ███   ▀█▀   ███    █▀   ▄████████▀    ███         ▀█████▀  
  ▀ Author : S.Katheeskumar [https://katheesh.github.io] */

const shell = require('shelljs')
const fs = require('fs');

if (!shell.which('git')) {
  shell.echo('❌ Sorry, This script required GIT');
  shell.exit(1);
}

const program = require('commander');

const inquirer = require('inquirer');
// Registers `inquirer-s3` under the key 's3-object'.
inquirer.registerPrompt('s3-object', require('inquirer-s3'));

//console.log(process.platform);
//['aix','darwin','freebsd','linux','openbsd','sunos','win32']

program
  .version('1.1.7')
  .action(() => {
    console.log("\n \n 🔥 Welcome to the Kasfy CLI  🔥 Version : 1.1.7 🔥\n");
    console.log("\n 🔰 Kasfy Documentation ➡️  https://kasfy.js.org 🌐\n \n");
});

program
  .command('new <projectname>') 
  .alias('create')
  .description('create new project')
  .action((projectname) => {

    if (process.platform == 'win32') {

      var path = shell.pwd();
      shell.cd(path);
      console.log("kasfy cli creating new project");
      shell.exec('git clone https://github.com/kasfy/kasfy.git kasfy-latest-release');

      shell.exec('rename kasfy-latest-release '+projectname);

      shell.exec('rmdir /Q /S '+projectname+'/.git');
      shell.exec('rmdir /Q /S '+projectname+'/.github');

      console.log("New kasfy project ready! name as "+projectname + "\n");

      inquirer.prompt([{
        type: 'input',
        name: 'indata',
        message: 'Are you Need to install dependencies? (y or n)'
      }]).then(function(answer) {
        
        if (answer.indata == "yes" || answer.indata == "y") {
          shell.cd(projectname);
          console.log("Please wait ...");
          shell.exec('npm install');

          console.log("\n\nGet Start Your project \n \t run: cd "+projectname+"\n \t run: kasfy serve ");
        } else {
          console.log("Oops...");
          console.log("\n\nMannually install dependencies after run your project. \n run : npm install");
        }
      });

    } else {

      var path = shell.pwd();
      shell.cd(path);
      console.log("🔥 kasfy cli creating new project");
      shell.exec('git clone https://github.com/kasfy/kasfy.git kasfy-latest-release');

      shell.exec('mv kasfy-latest-release '+projectname);

      shell.exec('rm -rf '+projectname+'/.git');
      shell.exec('rm -rf '+projectname+'/.github');

      console.log("✅ New kasfy project ready! name as "+projectname + "\n");

      inquirer.prompt([{
        type: 'input',
        name: 'indata',
        message: 'Are you Need to install dependencies? (y or n)'
      }]).then(function(answer) {
        
        if (answer.indata == "yes" || answer.indata == "y") {
          shell.cd(projectname);
          console.log("😄 Please wait ...");
          shell.exec('npm install');

          console.log("\n\n✅ Get Start Your project \n \t run: cd "+projectname+"\n \t run: kasfy serve ");
        } else {
          console.log("🙃 Oops...");
          console.log("\n\n❌ Mannually install dependencies after run your project. \n run : npm install");
        }
      });

    }
});

const Kasfy_Server = require('./server');

const Kasfy_File_Handler = require('./file_handler');

program.parse(process.argv);
