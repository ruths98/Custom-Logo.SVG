const {Circle, Square, Triangle} = require('./shapes')//makes sure the shapes file is linked so we can test the code we write there

//Circle test
describe('Circle', () => {
    test('renders correctly', () =>{
        const text = 'CIR';
        const textColor= 'white';
        const bgColor = 'yellow'

        const shape = new Circle(text, textColor, bgColor);
        shape.setColor('yellow')
        expect(shape.color).toEqual('yellow')
        expect(shape.render()).toEqual(`<circle cx="150" cy="100" r="80" height="100%" width="100%" fill="yellow" /><text x="150" y="125" font-size="60" text-anchor="middle" fill="${textColor}"> ${text}</text>`)
    });
});

//square test
describe('Square', () => {
    test('renders square', () =>{
        const text = 'SQU'
        const textColor= 'white';
        const bgColor = ('green')

        const shape = new Square(text, textColor, bgColor);
        shape.setColor('green')
        expect(shape.color).toEqual('green')
        expect(shape.render()).toEqual(`<rect x="50" height="200" width="200" fill="green" /><text x="150" y="125" font-size="60" text-anchor="middle" fill="${textColor}"> ${text}</text>`)
    });
});

//triangle test 
describe('Triangle', () => {
    test('renders triangle', () =>{
        const text = 'TRI';
        const textColor= 'white';
        const bgColor = 'red'

        const shape = new Triangle(text, textColor);
        shape.setColor('red')
        expect(shape.color).toEqual('red')
        expect(shape.render()).toEqual(`<polygon height="100%" width="100%" points="0, 200, 300, 200, 150, 0" fill="red" /> <text x="150" y="125" font-size="60" text-anchor="middle" fill="${textColor}"> ${text}</text>`)
    });
});