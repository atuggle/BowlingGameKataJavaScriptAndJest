
let totalPinsKnockedDown = 0

const game = {

    bowl(numberOfPins) {
        totalPinsKnockedDown += numberOfPins
    },

    score()  {
        return totalPinsKnockedDown;
    }
}

module.exports = game;