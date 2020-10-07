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
    fs.writeFile('app/controllers/'+ ctrlname +'Controller.js',
      'export default class ' +ctrlname+'Controller {\n\n\tconstructor() { \n \t\t//this.msg = "The NodeJS Framework for Smart Back-End"; \n\t} \n\n\tindex() {\n\t\t//Display a listing of the resource.\n\t} \n\n\tcreate(req, res) {\n\t\t//Show the form for creating a new resource.\n\t}\n\n\tstore(req, res) {\n\t\t//Store a newly created resource in storage.\n\t} \n\n\tupdate(req, res) {\n\t\t//Update the specified resource in storage.\n\t} \n\n\tdestroy(req, res) {\n\t\t//Remove the specified resource from storage.\n\t} \n  \n}', 
      function (err) {
        if (err) throw err;
        console.log('✅ successfully created ' + ctrlname+'Controller.');
        process.exit(1);
      });
  });

  program
  .command('make:migration <migrationname>') 
  .alias('create:migration')
  .description('create a migration')
  .action((migrationname) => {
    if (!fs.existsSync('./app') && !fs.existsSync('./config') && !fs.existsSync('./database') && !fs.existsSync('./routes')){
      console.log("\n ❌ Not Found kasfy folder stucture. \n");
      console.log("\n ❗️ Reinstall kasfy new project  \n");
      process.exit(1);
    }
    fs.writeFile('database/migrations/'+migrationname +'.json',
      '{\n \t"name": "'+migrationname +'", \n \t"primary": "id", \n \t"fields": { \n \t \t"name": "varchar(255) NOT NULL" \n \t} \n}', 
      function (err) {
        if (err) throw err;
        console.log('✅ migration successfully created as ' + migrationname+'.');
        process.exit(1);
      });
  });


