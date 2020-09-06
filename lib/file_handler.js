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
  .command('make:ctrl <ctrlname>') 
  .alias('create:controller')
  .description('create a controller')
  .action((ctrlname) => {
    if (!fs.existsSync('./app') && !fs.existsSync('./config') && !fs.existsSync('./public') && !fs.existsSync('./routes')){
      console.log("\n ❌ Not Found kasfy folder stucture. \n");
      console.log("\n ❗️ Reinstall kasfy new project  \n");
      process.exit(1);
    }
    fs.writeFile('app/controllers/'+ctrlname +'Controller.js',
      'export default class ' +ctrlname+'Controller { \n\n\t constructor() { \n //this.msg = "The NodeJS Framework for Smart Back-End"; \n\t } \n \n }', 
      function (err) {
        if (err) throw err;
        console.log('✅ successfully created ' + ctrlname+'Controller.');
        process.exit(1);
      });
  });


