const inquirer = require('inquirer');
const jest = require ('jest');
const fs = require('fs');

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
        name:'letters',
        message:'Which one to three letters would you like on the logo?'
    }
])

function createSVG(answers) {

  fs.writeFile('logo.svg', svg, (err) => {
    const { shape, textColor, bgColor, letters } = answers;

    if (err) {
      console.error('Error saving SVG file:', err);
    } else {
      console.log('SVG file saved successfully!');
    }
  });
}


modules.export = input({shape, color, letters})