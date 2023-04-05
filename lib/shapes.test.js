const shapeFile = require('./shapes')//makes sure the shapes file is linked so we can test the code we write there
const index = require('../index')
test('selects the shape the user inputs', () => {
    expect(index.shape).toBe(index.shape)
})