

class game {
    constructor() {
        this.currentIndex = 0
        this.totalPinsKnockedDown = []
    }

    bowl(numberOfPins) {
        this.totalPinsKnockedDown[this.currentIndex] = numberOfPins
        this.currentIndex += 1
    };

    score()  {
        let totalScore = 0;
        for (let i = 0; i < 20; i++) {
            totalScore += this.totalPinsKnockedDown[i]
        }
        return totalScore;
    };
};

module.exports = game;