const fs = require('fs')

//create a class for Svg
class Svg{
    constructor(shape){
      this.shape=shape
    }
    render(){
      return `<svg version='1.1' xmlns="http://www.w3.org/2000/svg" width="300" height="200">${this.shape.render()}</svg>`
    }

  }

class Shape{
    constructor(){
        this.color=""
    }
    setColor(color){
        this.color=(color);
    }
}

class Circle extends Shape{
    constructor (text, textColor, bgColor){
        super(text, textColor, bgColor)
        console.log('Square class called!')
    }
    render(){
        return `<circle  cx="50%" cy="50%" c="100" height="100%" width="100%" fill="${this.color}" />`
    }
}

class Square extends Shape{
    constructor (text, textColor, bgColor){
        super(text, textColor, bgColor)
        console.log('Square class called!')
    }
    render(){
        return `<rect x="50" height="200" width="200" fill="${this.color}" /><text x="100" y="145" font-size="60" text-anchor="middle" fill=${this.textColor}> ${this.text}<.text>`
    }
}
class Triangle extends Shape{
    constructor (text, textColor, bgColor){
        super(text, textColor, bgColor)
        console.log('triangle class called!')
    }
    render(){
        return `<polygon height="100%" width="100%" points="0, 200, 300, 200, 150, 0" fill="${this.color}" /> <text x="100" y="145" font-size="60" text-anchor="middle" fill=${this.textColor}> ${this.text}<.text>`
    }
}

const createSVG = ({shape, textColor, bgColor, text}) => {
    Svg.render()
    // if (answers.shape == 'triangle'){
    //   Triangle.render()
    // }
    // if (answers.shape == 'square'){
    //   Square.render()
    // }
    // if (answers.shape == 'circle'){
    //   Circle.render()
    // }
  }

module.exports = { Circle, Square, Triangle, Svg}, createSVG