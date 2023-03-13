const fs = require("fs");
const path = require('path');
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

// array of questions for user
const questions = [
    
    {
        type: `input`,                                                              
        message: `title of your project`,
        name: `title`
    },
    {
        type: `input`,                                                              
        message: 'description of your project',
        name: `desc`
    },
    {
        type: `input`,                                                              
        message: `describe the installation this project have?`,
        name: `install`
    },
    {
        type: `input`,                                                              
        message: `describe usage this project have?`,
        name: `usage`
    },
    {
        type: `list`,                                                              
        message: `Pick your License`,
        name: `license`,
        choices: ["MIT", "Apache", "Mozilla"]

    },
    {
        type: `input`,                                                              
        message: `Describe contribution guidelines`,
        name: `contr`
    },
    {
        type: `input`,                                                              
        message: `How do you test this project`,
        name: `test`
    },

];

// function to write README file
function writeToFile(fileName, data) {
}

// function to initialize program
function init() {

}

// function call to initialize program
init();
