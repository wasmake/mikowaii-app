# Mikowaii.net
> An anime streaming platform free, open source, based on electronjs.

It is illegal to distributable copyrighted content (and Anime is copyrighted), we are a platform that serves webtorrents from dictionaries and let you preview the content instead of downloading it, and you will be able to watch it in a *netflix* style.

## Contributing to the project
Since this project is open source, all hands are welcome to contribute by making a donation or putting your hands on the code.


### Technologies used by this project
* Use of [`webpack-dev-server`](https://github.com/webpack/webpack-dev-server) for development
* HMR for both `renderer` and `main` processes
* Use of [`babel-preset-env`](https://github.com/babel/babel-preset-env) that is automatically configured based on your `electron` version
* Use of [`electron-builder`](https://github.com/electron-userland/electron-builder) to package and build a distributable electron application

### Getting Started
Simply clone down this repository, install dependencies, and get started on your application (you may want to give a star and a fork of this project).

```bash

# or copy template using git clone
git clone https://github.com/wasmake/mikowaii-app.git
cd mikowaii-app
rm -rf .git

# install dependencies
npm - i
```

### Development Scripts

```bash
# run application in development mode
npm run dev

# compile source code and create webpack output
npm run compile

# `yarn compile` & create build with electron-builder
npm run dist

# `yarn compile` & create unpacked build with electron-builder
npm run dist:dir
```
