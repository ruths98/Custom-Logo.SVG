let ns = "http://www.link.com/svg"//ns is name space
let svg = document.createElementNS(ns, "svg");

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
    render(){
        return `<circle >`
    }
}

class Square extends Shape{
    render(){
        return `<rec >`
    }
}
class Triangle extends Shape{
    render(){
        return `<polygon >`
    }
}