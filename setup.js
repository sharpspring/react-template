/*
 * This file should be removed on your project's first commit.
 * If you see this in your repo at all, someone did something wrong.
 * The only place it should show up at all is in the project starter repo.
 */
/* eslint-disable no-console */
const fs = require('fs');

const prompt = (question, callback) => {
  const stdin = process.stdin;
  const stdout = process.stdout;

  stdin.resume();
  stdout.write(question);

  stdin.once('data', data => callback(data.toString().trim()));
};

const setupFile = (projectName, src, dest = src) => {
  const data = fs.readFileSync(src, 'utf-8');
  const newValue = data.replace(/(\${projectName})/gm, projectName);
  fs.writeFileSync(dest, newValue, 'utf-8');
  console.log(`${dest} is updated`);
};

const setupRepo = (projectName) => {
  setupFile(projectName, './Jenkinsfile');
  setupFile(projectName, './package.json');
  setupFile(projectName, './deploy.js');
  setupFile(projectName, './projectREADME.md', './README.md');
  fs.unlink('./setup.js', (err) => {
    if (err) {
      return console.log(err);
    }
    console.log('setup.js has been deleted');
    return console.log('Setup is complete. Please commit these changes to get started!');
  });
};

prompt('Please enter the name of your new project: ', setupRepo);

