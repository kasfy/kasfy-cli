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

const program = require('commander');
const fs = require('fs');

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

	if (!fs.existsSync('./app') && !fs.existsSync('./config') && !fs.existsSync('./public') && !fs.existsSync('./routes')){
      console.log("\n ❌ Not Found kasfy folder stucture. \n");
      console.log("\n ❗️ Reinstall kasfy new project  \n");
      process.exit(1);
    }

  const npm = require("npm");
  npm.load();
  npm.load(() => npm.run("start"));

});

program
  .command('migrate')
  .alias('mig')
  .description('Migration command')
  .action(() => {

  if (!fs.existsSync('./node_modules')) {
    console.log("\n ❌ Not Found `node_modules` directory. \n");
    console.log("\n ❗️ run command: npm install  \n");
    process.exit(1);
  }

  if (!fs.existsSync('./app') && !fs.existsSync('./config') && !fs.existsSync('./public') && !fs.existsSync('./routes')){
    console.log("\n ❌ Not Found kasfy folder stucture. \n");
    console.log("\n ❗️ Reinstall kasfy new project  \n");
    process.exit(1);
  }

  const npm = require("npm");
  npm.load();
  npm.load(() => npm.run("migrate"));

});

program
  .command('migrate:fresh')
  .alias('mig:fresh')
  .description('Fresh Migration command')
  .action(() => {

  if (!fs.existsSync('./node_modules')) {
    console.log("\n ❌ Not Found `node_modules` directory. \n");
    console.log("\n ❗️ run command: npm install  \n");
    process.exit(1);
  }

  if (!fs.existsSync('./app') && !fs.existsSync('./config') && !fs.existsSync('./public') && !fs.existsSync('./routes')){
    console.log("\n ❌ Not Found kasfy folder stucture. \n");
    console.log("\n ❗️ Reinstall kasfy new project  \n");
    process.exit(1);
  }

  const npm = require("npm");
  npm.load();
  npm.load(() => npm.run("migrate:fresh"));

});

