const inquirer = require('inquirer');
const jest = require ('jest');
const {createSVG} = require('./lib/shapes')
const fs = require('fs')

// let ns = "http://www.link.com/svg"//ns is name space
// let svg = document.createElementNS(ns, "svg");

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
        name:'textColor',
        message:'What color would you like the font to be? You may enter a name (red, yellow, blue, etc), or a hexadecimal number (like E06910)'
    },
    {
        type:'input',
        name:'bgColor',
        message:'What color would you like the shape/background to be? You may enter a name (red, yellow, blue, etc), or a hexadecimal number (like E06910)'
    },
    {
        type:'input',
        name:'text',
        message:'Which one to three letters would you like on the logo?'
    }
])

//after the prompt we will run the answers (response) through our createSVG function and save this as a variable svgContent
.then((answers) => {
  const svgContent = createSVG(answers)

fs.writeFile('logo.svg', svgContent, (err) => {
    if (err) {
      console.error('Error saving SVG file:', err);
    } else {
      console.log('SVG file saved successfully!');
    }
  });
});



