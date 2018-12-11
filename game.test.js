const myGame = require('./game')


it('can create game', () => {
    expect(myGame).toBeDefined();
})

it('can bolw gutter game', () => {
    let score = myGame.score();
    expect(score).toBe(0);
})
