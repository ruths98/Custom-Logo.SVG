const {Circle, Square, Triangle} = require('./shapes')//makes sure the shapes file is linked so we can test the code we write there

//Circle test
describe{'Circle', () => {
    test('renders correctly', () =>{
        const shape = new Circle();
        const color = ('blue')
        shape.setColor(color);
        expect(shape.render()).toEqual(`<circle cx="50%" cy="50%" c="100" height="100%" width="100%" fill="${this.color}" />`)
    });
}};

//square test
describe{'Square', () => {
    test('renders correctly', () =>{
        const shape = new Square();
        const color = ('green')
        shape.setColor(color);
        expect(shape.render()).toEqual(`<rect x="50" height="200" width="200" fill="${this.color}" />`)
    });
}};

//triangle test 
describe{'Triangle', () => {
    test('renders correctly', () =>{
        const text = 'TRI';
        const textColor= 'white';
        const bgcolor = 'red'

        const shape = new Triangle(letters, textColor, bgColor);
        shape.setColor(color);
        expect(shape.render()).toEqual(`<polygon height="100%" width="100%" points="0, 200, 300, 200, 150, 0"  fill="red" /> <text x="100" y="145" font-size="60" text-anchor="middle" fill=${textColor}> ${text}<.text>`)
        //if this doesnt work try no height and width and points = '150, 18, 244, 182, 56, 182'
    });
}};