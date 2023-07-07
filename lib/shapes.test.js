const {Circle, Square, Triangle} = require('./shapes')//makes sure the shapes file is linked so we can test the code we write there

//Circle test
describe{'Circle', () => {
    test('renders correctly', () =>{
        const text = 'CIR';
        const textColor= 'white';
        const bgcolor = 'yellow'

        const shape = new Circle(letters, textColor, bgColor);
        expect(shape.bgColor).toEqual('yellow')
        expect(shape.render()).toEqual(`<circle cx="50%" cy="50%" c="100" height="100%" width="100%" fill="${this.color}" /><text x="100" y="145" font-size="60" text-anchor="middle" fill=${textColor}> ${text}<.text>`)
    });
}};

//square test
describe{'Square', () => {
    test('renders square', () =>{
        const text = 'SQU'
        const textColor= 'white';
        const bgColor = ('green')

        const shape = new Square(letters, textColor, bgColor);
        expect(shape.bgColor).toEqual('green')
        expect(shape.render()).toEqual(`<rect x="50" height="200" width="200" fill="${this.color}" /><text x="100" y="145" font-size="60" text-anchor="middle" fill=${textColor}> ${text}<.text>`)
    });
}};

//triangle test 
describe{'Triangle', () => {
    test('renders triangle', () =>{
        const text = 'TRI';
        const textColor= 'white';
        const bgcolor = 'red'

        const shape = new Triangle(letters, textColor, bgColor);
        expect(shape.bgColor).toEqual('red')
        expect(shape.render()).toEqual(`<polygon height="100%" width="100%" points="0, 200, 300, 200, 150, 0"  fill="red" /> <text x="100" y="145" font-size="60" text-anchor="middle" fill=${textColor}> ${text}<.text>`)
    });
}};