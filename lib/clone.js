const program = require('commander');
//console.log(process.platform);
//['aix','darwin','freebsd','linux','openbsd','sunos','win32']
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