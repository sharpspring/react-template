/*
 * This file should be removed on your project's first commit. If you see this in
 * your project's history at all, someone did something wrong. The only
 * place it should show up at all is in the project starter repo
 */
var fs = require('fs');

function prompt(question, callback) {
  const stdin = process.stdin,
  const stdout = process.stdout;

  stdin.resume();
  stdout.write(question);

  stdin.once('data', function(data) {
    callback(data.toString().trim());
  });
}

function readWriteAsync() {
  fs.readFile('filelist.txt', 'utf-8', function(err, data) {
    if (err) throw err;

    var newValue = data.replace(/^\./gim, 'myString');

    fs.writeFile('filelistAsync.txt', newValue, 'utf-8', function(err) {
      if (err) throw err;
      console.log('filelistAsync complete');
    });
  });
}

function readWriteSync() {
  var data = fs.readFileSync('filelist.txt', 'utf-8');

  var newValue = data.replace(/^\./gim, 'myString');

  fs.writeFileSync('filelistSync.txt', newValue, 'utf-8');

  console.log('readFileSync complete');
}

console.log('Please enter the name of your new project:');
const projectName = getProjectName();
const repoLocation = `https://github.com/sharpspring/${projectName}`;
setupJenkinsfile();
setupPackage();
setupDeploy();
fs.unlink('./setup.js', (err) => {
  if (err) {
    return console.log(err);
  }
  console.log('setup.js has been deleted');
  console.log('Setup is complete. Please commit these changes to get started!');
});

