# react-ts-sass-project
Project to create a model using React, Sass (flexbox model), Jest and Webpack

Create application React + Typescript + Webpack +  Sass + Jest
From Scratch



There are several ways to create a React application, one of them is through the create-react-app command (https://github.com/facebook/create-react-app), but it is very important for some developers to know what the operation and put your own configurations. That is why this small manual was created, where a React application is created from scratch, including other technologies such as Typescript as a programming language, Webpack as a module bundler, Sass as a css preprocessor and Jest for unit tests.



Create a new directory and move into it

mkdir ts-react-wp-sass && cd $_ && config && src

Initialize a package.json by running:

npm init -y

We need to install the webpack and other as development dependencies.

yarn add webpack webpack-cli webpack-dev-server -D


Generating an HTML file from a template, minimizing the markup

yarn add html-webpack-plugin html-loader -D

Now create a new file named config/webpack.config.js and add a base configuration

const HtmlWebPackPlugin = require("html-webpack-plugin");
module.exports = {
 module: {
   rules: [
     {
       test: /\.html$/,
       use: [{ loader: "html-loader", options: { minimize: true } }]
     
   ]
 },
 plugins: [
   new HtmlWebPackPlugin({
   template: "src/index.html",
   filename: "./index.html"
   })
 ]
};


Create src/index.html

<!DOCTYPE html>
<html lang="en">
 <head>
   <meta charset="utf-8">
   <meta name="viewport" content="width=device-width, initial-scale=1">
   <title>React+TS+WP+SASS+JEST</title>
</head>
 <body>
   <noscript>
       You need to enable Javascript to run this app.
   </noscript>
<div id=”root”></div>
</body>
</html>

Install typescript

yarn add typescript ts-loader -D


Update config/webpack.config.js and add this code

devtool: 'source-map',
resolve: {
    extensions: [".tsx", ".ts", ".js"]
},
{
    test: /\.tsx?$/,
    loader: 'ts-loader',
    exclude: /node_modules/,
},

Create src/index.ts for test

function getName(name: String) {
    return name;
  }
console.log(getName(‘foo-bar’));

Create tsconfig.json
{
  "compilerOptions": {
    "module": "esnext",
    "target": "es5",
    "lib": ["es6", "dom"],
    "sourceMap": true,
    "allowJs": true,
    "moduleResolution": "node",
    "forceConsistentCasingInFileNames": true,
    "noImplicitReturns": true,
    "noImplicitThis": true,
    "noImplicitAny": true,
    "strictNullChecks": true,
    "suppressImplicitAnyIndexErrors": true,
    "noUnusedLocals": true,
    "allowSyntheticDefaultImports": true
  },
  "exclude": [
    "node_modules"
  ]
}



Update package.json and add in scripts and run with webpack to test

"build": "webpack --mode production --config config/webpack.config.js",
yarn run build

Open dist/index.html and view with devtool

Install packages react

yarn add react react-dom
yarn add @types/react @types/react-dom -D

Change src/index.ts by src/index.tsx and paste this code

import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
   
ReactDOM.render(<App />, document.getElementById('root'));


Create src/App.tsx
   
import React, { Component } from 'react';


export class App extends Component {
   render() {
     return(
       <div>REACT + TYPESCRIPT!!!</div>
     );
   }
}


export default App;


Update tsconfig.json
{
  "compilerOptions": {
    "module": "esnext",
    "target": "es5",
    "lib": ["es6", "dom"],
    "sourceMap": true,
    "allowJs": true,
    "jsx": "react",
    "moduleResolution": "node",
    "forceConsistentCasingInFileNames": true,
    "noImplicitReturns": true,
    "noImplicitThis": true,
    "noImplicitAny": true,
    "strictNullChecks": true,
    "suppressImplicitAnyIndexErrors": true,
    "noUnusedLocals": true,
    "allowSyntheticDefaultImports": true
  },
  "exclude": [
    "node_modules"
  ]
}


Add tslint

yarn add tslint tslint-loader tslint-react -D

Create tslint.json

 
{
    "extends": ["tslint-react"],
    "rules": {
        "align": [
            true,
            "parameters",
            "arguments",
            "statements"
        ],
        "ban": false,
        "class-name": true,
        "comment-format": [
            true,
            "check-space"
        ],
        "curly": true,
        "eofline": false,
        "forin": true,
        "indent": [ true, "spaces" ],
        "interface-name": [true, "never-prefix"],
        "jsdoc-format": true,
        "jsx-no-lambda": false,
        "jsx-no-multiline-js": false,
        "label-position": true,
        "max-line-length": [ true, 120 ],
        "member-ordering": [
            true,
            "public-before-private",
            "static-before-instance",
            "variables-before-functions"
        ],
        "no-any": true,
        "no-arg": true,
        "no-bitwise": true,
        "no-console": [
            true,
            "log",
            "error",
            "debug",
            "info",
            "time",
            "timeEnd",
            "trace"
        ],
        "no-consecutive-blank-lines": true,
        "no-construct": true,
        "no-debugger": true,
        "no-duplicate-variable": true,
        "no-empty": true,
        "no-eval": true,
        "no-shadowed-variable": true,
        "no-string-literal": true,
        "no-switch-case-fall-through": true,
        "no-trailing-whitespace": false,
        "no-unused-expression": true,
        "no-use-before-declare": true,
        "one-line": [
            true,
            "check-catch",
            "check-else",
            "check-open-brace",
            "check-whitespace"
        ],
        "quotemark": [true, "single", "jsx-double"],
        "radix": true,
        "semicolon": [true, "always"],
        "switch-default": true,

        "trailing-comma": false,

        "triple-equals": [ true, "allow-null-check" ],
        "typedef": [
            true,
            "parameter",
            "property-declaration"
        ],
        "typedef-whitespace": [
            true,
            {
                "call-signature": "nospace",
                "index-signature": "nospace",
                "parameter": "nospace",
                "property-declaration": "nospace",
                "variable-declaration": "nospace"
            }
        ],
        "variable-name": [true, "ban-keywords", "check-format", "allow-leading-underscore", "allow-pascal-case"],
        "whitespace": [
            true,
            "check-branch",
            "check-decl",
            "check-module",
            "check-operator",
            "check-separator",
            "check-type",
            "check-typecast"
        ]
    }
}

Add rule in config/webpack.config.js

{
  test: /\.(ts|tsx)$/,
  loader: 'tslint-loader',
  enforce: 'pre',
},

Optimizing images

yarn add img-loader url-loader file-loader -D


Add to webpack.config.js

{                                                                                                                                                                                      
  test: /\.(png|jpe?g|gif|svg)$/,                                                                                                                                                      
  use: [                                                                                                                                                                               
    {                                                                                                                                                                                  
      loader: 'url-loader',                                                                                                                                                            
      options: {                                                                                                                                                                       
        limit: 10000                                                                                                                                                                   
      }                                                                                                                                                                                
    }
  ]                                                                                                                                                                                    
}
 

Compiling SASS

yarn add css-loader sass-loader postcss-loader node-sass mini-css-extract-plugin -D

Update to config/webpack.config.js
Variable:
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
 
Rule:
{
  test: /\.scss$/,
  use: [
    MiniCssExtractPlugin.loader,
    {                                                                                                                                                                                  
      loader: "css-loader",                                                                                                                                                            
      options: {minimize: true}                
    },                                                                                                                                                                                 
    {                                                                                                                                                                                  
      loader:"postcss-loader"                                                                                                                                                          
    },                                                                                                                                                                                 
    {                                                                                                                                                                                  
      loader:"sass-loader"                                                                                                                                                             
    }                
  ]
}
Plugin
new MiniCssExtractPlugin({
  	  filename: "[name].css",
        chunkFilename: "[id].css"
      })

Create src/App.scss

$color-orange: #f98a09;
 
.main {
 background: $color-orange;
 display: flex;
 flex-direction: row;
 flex-wrap: wrap;
 justify-content: center;
 align-items: center;
}

Import to src/App.tsx and use

Import 
import './App.scss'; 


Use scss
<div className=”main”>REACT + TYPESCRIPT!!!</div>


Create postcss.config.js 

module.exports = {
 plugins: [require("autoprefixer")]
};

Open up package.json and configure the browsers list:

"browserslist": ["last 2 versions"],

Update scripts in package.json
scripts: { 
  "start": "webpack-dev-server --mode development --config config/webpack.config.js",
  "build": "webpack --mode production --config config/webpack.config.js",
  "test": "echo \"Error: no test specified\" && exit 1"
},

Run application in developer mode

yarn start

Install Jest and dependencies to unit test

yarn add jest ts-jest react-test-renderer @types/jest enzyme enzyme-adapter-react-16 -D


Create src/setupTests.js

var enzyme = require('enzyme');
var Adapter = require('enzyme-adapter-react-16');

enzyme.configure({ adapter: new Adapter() });

Create config/jest.config.js

module.exports = {
    rootDir: '../',
    setupTestFrameworkScriptFile: "<rootDir>/src/setupTests.js",
    transform: {
      "^.+\\.tsx?$": "ts-jest"
    },
    testRegex: "(/__tests__/.*|(\\.|/)(test|spec))\\.(jsx?|tsx?)$",
    moduleFileExtensions: [
      "ts",
      "tsx",
      "js",
      "jsx",
      "json",
      "node"
    ],
    moduleNameMapper: {
      "\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga|css|scss)$": "<rootDir>/__mocks__/fileMock.js",
    },
};




Update scripts in package.json

scripts: { 
  "start": "webpack-dev-server --mode development --config config/webpack.config.js",
  "build": "webpack --mode production --config config/webpack.config.js",
  "test": "jest --config config/jest.config.js"
},


Create src/App.spec.tsx and copy this content

import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import renderer from 'react-test-renderer';
import toJson from 'enzyme-to-json';
import { shallow } from 'enzyme';

describe('Component: App', () => {
  const items = ['Learn react', 'rest', 'go out'];

  it('should match its empty snapshot', () => {
    const tree = renderer.create(
      <App />
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });

});


Run test

yarn test

