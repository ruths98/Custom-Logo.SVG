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
    constructor (text, textColor){
        super()
        this.text=text
        this.textColor=textColor
        console.log('Square class called!')
    }
    render(){
        return `<circle cx="150" cy="100" r="80" height="100%" width="100%" fill="${this.color}" /><text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textColor}"> ${this.text}</text>`
    }
}

class Square extends Shape{
    constructor (text, textColor){
        super()
        this.text=text
        this.textColor=textColor
        console.log('Square class called!')
    }
    render(){
        return `<rect x="50" height="200" width="200" fill="${this.color}" /><text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textColor}"> ${this.text}</text>`
    }
}
class Triangle extends Shape{
    constructor (text, textColor){
        super()
        this.text=text
        this.textColor=textColor
        // super(text, textColor, color)
        // console.log('triangle class called!')
    }
    render(){
        return `<polygon height="100%" width="100%" points="0, 200, 300, 200, 150, 0" fill="${this.color}" /> <text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textColor}"> ${this.text}</text>`
    }
}

const createSVG = ({shape, textColor, bgColor, text}) => {
    let newShape
    
    // const svg = new Svg()
    // Svg.render()
    
    if (shape == 'triangle'){
      newShape= new Triangle(text,textColor)
      newShape.setColor(bgColor)
    }
    if (shape == 'square'){
        newShape= new Square(text,textColor)
        newShape.setColor(bgColor)
    }
    if (shape == 'circle'){
        newShape= new Circle(text,textColor)
        newShape.setColor(bgColor)
    }
    return new Svg(newShape).render()
  }

module.exports = { Circle, Square, Triangle, Svg, createSVG}