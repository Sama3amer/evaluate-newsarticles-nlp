# Evaluate a News Article with Natural Language Processing

We will build a web tool that allows users to run Natural Language Processing (NLP) on articles or blogs found on other websites. NLP is the ability of an application to understand the human language, written or oral.

and its main goals are to help learning the following:

- Setting up Webpack
- Sass styles
- Webpack Loaders and Plugins
- Creating layouts and page design
- Service workers
- Using APIs and creating requests to external urls


## Install npm
```
npm install
```
## Install loaders and plugins
```
# Choose the necessary installation for your development mode
npm i -D @babel/core @babel/preset-env babel-loader
npm i -D style-loader node-sass css-loader sass-loader
npm i -D clean-webpack-plugin
npm i -D html-webpack-plugin
npm i -D mini-css-extract-plugin
npm i -D optimize-css-assets-webpack-plugin terser-webpack-plugin
```
## Sign up for an API key 
Sign up for an API key at [meaningcloud.com](https://www.meaningcloud.com/developer/create-account)

## Configure environment variables using dotenv package
	1. Install the dotenv package
	```
	npm install dotenv
	```
	2. Create a new `.env` file in the root of your project
	3. Fill the `.env` file with your API key like this:
	```
	API_KEY=**************************
	```
# Start the project
after instllation, the production build (generatedist folder) is created with webpack using the following commands
`npm run build-prod` ,
`npm run start`

for developer environment , use the following commands (woll utillize the webpack-dev-server)
    `npm run build-dev`

this will automatically load the page.

`npm run start`

### Open browser at http://localhost:8080/


## For test

`npm run test`

