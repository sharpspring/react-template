![](http://sharpspring.com/wp-content/uploads/2016/05/ssLogo.png)
![](http://jpsierens.com/wp-content/uploads/2016/06/react-eco-wp.gif)

# ${projectName} Front End

## Introduction
This repository is a React/Redux project for ${projectName}.

Please check out our [documentation](docs/README.md) in the `docs/` folder.

## Requirements
* [Node v7.10.0](https://nodejs.org/en/download/package-manager/#osx)
* [Yarn](https://yarnpkg.com/en/docs/install#mac-tab)

## Installation

```bash
yarn install
```

## Build and serve the code locally
```bash
yarn start
```

## Opening the code in a browser
When you open any instance that serves a scoutfile, the latest production ${projectName} application will serve by default. This assumes the correct config exists. You can override this with the `scout` url parameter.

`localhost/app?scout=dev`

This will override the scout to use the application you are serving from localhost, using the `npm start` command.

`localhost/app?scout=${scoutHash}`

This will override the scout to use a deployed application from the `${projectName}-dev` bucket, which lives in Google Cloud. Note that it will always serve from the `${projectName}-dev` bucket using this method, and you must have an admin account to do so.

To get your application deployed to Google Cloud, please refer to the deployment section of the README

## Development
[react-hot-loader](https://github.com/gaearon/react-hot-loader) is a tool that allows you to edit code in your text editor, save the changes and see the changes immediately in your browser while simultaneously preserving application state.

Upon opening the application in a development environment, the redux dev monitor should appear in the browser. If you want to hide the redux dev monitor, press ```CTRL+H```.

## Testing
```yarn test```

Use jest and enzyme to test this applcation. All things that are tested fall under one of the three categories:

* React Component
* React Container
* React agnostic ES6 Module with exported functions

## Deployment

Deployment of your code automatically happens when you stage a PR of the branch against master. Jenkins will automatically start a build. If the build is successful, it will run `yarn deploy` to put your code on the `${projectName}-dev` bucket in our Google Cloud instance.

If you want to to deploy your code before staging your PR, run `npm run deploy` locally. [This requires `gsutil` to be installed](https://cloud.google.com/storage/docs/gsutil_install). You will need to talk to an admin to get permissions to write to the `${projectName}-dev`.
