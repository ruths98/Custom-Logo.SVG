const inquirer = require('inquirer');
const jest = require ('jest');
const fs = require('fs');
const { Circle, Square, Triangle} = require("./lib/shapes.js")

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

//create a class for Svg
class Svg{
  constructor(){
    this.textElement=''
    this.shapeElement=''
  }
  render(){
    return `<sbg version='1.1' xmlns="http://www.w3.org/2000/ssvg" width="300" height="200" />`
  }
  setTextElement(text, color){
    this.textElement = `<text x="150" y="125" font-size="60" text-anchor="middle" fill="${textColor}">${letters}</text>`
  }
  setShapeElement(shape){
    this.shapeElement = shape.render()
  }
}

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


modules.export = input({shape, color, text})