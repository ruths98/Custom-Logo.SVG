//create a class for Svg
class Svg{
    constructor(shape){
      this.shape=shape
    }
    render(){
      return `<svg version='1.1' xmlns="http://www.w3.org/2000/svg" width="300" height="200">${this.shape.render()}</svg>`
    }
    // setTextElement(text, color){
    //   this.textElement = `<text x="150" y="125" font-size="60" text-anchor="middle" fill="${textColor}">${letters}</text>`
    // }
    // setShapeElement(shape){
    //   this.shapeElement = shape.render()
    // }
  }

// let circle = document.createElementNS(ns, "circle");
// circle.setAttribute("cx","10");//placement on x axis
// circle.setAttribute("cy","10");//placement on y axis
// circle.setAttribute("r","100");//radius
// circle.style.fill = 'red';
// svg.appendChild(circle);

// let square = document.createElementNS(ns, "square");
// square.setAttribute("x","10");//placement on x axis
// square.setAttribute("y","10");//placement on y axis
// square.setAttribute("width","100");
// square.setAttribute("height","100");
// square.style.fill = 'red';
// svg.appendChild(square);

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

module.exports = { Circle, Square, Triangle, Svg}