const myGame = require('./game')


it('can create game', () => {
    theGame = new myGame()
    expect(theGame).toBeDefined()
})

it('can bowl gutter game', () => {
    theGame = new myGame()
    bowlMany(theGame, 20, 0)
    let score = theGame.score()
    expect(score).toBe(0)
})

it('can bowl all ones', () => {
    theGame = new myGame()
    bowlMany(theGame, 20, 1)
    let score = theGame.score()
    expect(score).toBe(20)
})

// it('can bowl one spare', () => {
//     theGame = new myGame()
//     //Bowl spare first
//     theGame.bowl(5)
//     theGame.bowl(0)
//     bowlMany(theGame, 18, 2)

//     let score = theGame.score()
//     expect(score).toBe(43)
// })

//Helper functions below
function bowlMany(game, numberOfThrows, numberOfPins) {
    for (let i=0; i<numberOfThrows; i++) {
        game.bowl(numberOfPins)
    }
}
