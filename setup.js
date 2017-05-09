/*
 * This file should be removed on your project's first commit.
 * If you see this in your repo at all, someone did something wrong.
 * The only place it should show up at all is in the project starter repo.
 */
/* eslint-disable no-console */
const fs = require('fs');

let accountName;
let projectName;

const prompt = (question, callback) => {
  const stdin = process.stdin;
  const stdout = process.stdout;

  stdin.resume();
  stdout.write(question);

  stdin.once('data', data => callback(data.toString().trim()));
};

const setupFile = (src, dest = src) => {
  const data = fs.readFileSync(src, 'utf-8');
  const newValue = data
    .replace(/(\${projectName})/gm, projectName)
    .replace(/(\${accountName})/gm, accountName);
  fs.writeFileSync(dest, newValue, 'utf-8');
  console.log(`${dest} is updated`);
};

const setupRepo = () => {
  setupFile('./Jenkinsfile');
  setupFile('./package.json');
  setupFile('./deploy.js');
  setupFile('./scoutfile/app-scout.js');
  setupFile('./scoutfile/build.js');
  setupFile('./scoutfile/deploy.js');
  setupFile('./projectREADME.md', './README.md');
  fs.unlinkSync('./setup.js');
  console.log('setup.js has been deleted');
  fs.unlinkSync('./projectREADME.md');
  console.log('projectREADME.md has been deleted');
  console.log('Setup is complete. Please commit these changes to get started!');
  process.exit(0);
};

prompt('Please enter the name of your account or organization', (input) => {
  accountName = input;
  prompt('Please enter the name of your new project: ', (secondInput) => {
    projectName = secondInput;
    setupRepo();
  });
});
