const myGame = require('./game')


it('can create game', () => {
    expect(myGame).toBeDefined();
})

it('can bolw gutter game', () => {
    bowlMany(myGame, 20, 0)
    let score = myGame.score();
    expect(score).toBe(0)
})

//Helper functions below
function bowlMany(myGame, numberOfThrows, numberOfPins) {
    for (let i=0; i<numberOfThrows; i++) {
        myGame.bowl(numberOfPins)
    }
}
