# react-template
A out-of-box solution to spin up a new react-redux skeleton for SharpSpring front-end projects

## Pre-requisites
* Permissions to create new projects in the SharpSpring organization
* Node v7.10.0

## Getting Started

1. Fork this repository within the SharpSpring organization.
2. Go to the new fork's settings page
3. Rename the fork to something relevant to the project's scope
4. Clone the fork locally and `cd` into the new local clone
5. Run `node setup.js` inside of the project folder
6. When prompted, type the name of your repo. It is important to use the **EXACT NAME OF YOUR REPO** that you defined in step 3.
7. Commit all the changes to your new repo as the initial commit.

## Verifying your repo is good to go

There are a few files that should have changed when using `setup.js`.

* `Jenkinsfile`
* `deploy.js`
* `package.json`

If these files didn't update to point to the new repo, then please open an issue to report this.