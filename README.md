# react-template
A out-of-box solution to spin up a new react-redux skeleton for front-end projects

## Pre-requisites
* Node v7.10.0
* yarn

## Getting Started

1. Fork this repository within your github organization or account.
2. Go to the new fork's settings page
3. Rename the fork to something relevant to the project's scope
4. Clone the fork locally and `cd` into the new local clone
5. Run `node setup.js` inside of the project folder
6. When prompted, type the name of your github organization or account. For instance, I would type `msholty-fd`.
7. When prompted, type the name of your repo. It is important to use the **EXACT NAME OF YOUR REPO** that you defined in step 3.
8. Commit all the changes to your new repo as the initial commit.

## Verifying your repo is good to go

There are a few files that should have changed when using `setup.js`.

* `Jenkinsfile`
* `deploy.js`
* `package.json`
* `README.md`
* `scoutfile/app-scout.js`
* `scoutfile/build.js`
* `scoutfile/deploy.js`

Some files should be removed

* `setup.js`
* `projectREADME.md`

If these files didn't update to point to the new repo, then please open an issue to report this.