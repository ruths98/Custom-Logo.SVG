const inquirer = require('inquirer');
const jest = require ('jest');

inquirer
.prompt ([
    {
        type:'list',
        name:'shape',
        message:'What Shape would you like for your logo?',
        choices: ['circle','square','triangle']
    },
    {
        type:'input',
        name:'color',
        message:'What color would you like the logo to be? You may enter a name (red, yellow, blue, etc), or a hexadecimal number (like E06910)'
    },
    {
        type:'input',
        name:'letters',
        message:'Which one to three letters would you like on the logo?'
    }
])