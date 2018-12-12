

class game {
    constructor() {
        this.throwIndex = 0
        this.totalPinsKnockedDown = []
    };

    bowl(numberOfPins) {
        this.totalPinsKnockedDown[this.throwIndex] = numberOfPins
        this.throwIndex += 1
    };

    isStrike(currentIndex) {
        let frameScore = this.totalPinsKnockedDown[currentIndex]
        return  frameScore === 10
    };

    isSpare(currentIndex) {
        let frameScore = this.totalPinsKnockedDown[currentIndex] + this.totalPinsKnockedDown[currentIndex+1]
        return  frameScore === 10
    };

    score()  {
        let totalScore = 0;
        let currentIndex = 0;
        for (let frame = 0; frame < 10; frame++) {
            if (this.isStrike(currentIndex)) {
                totalScore += 10 + this.totalPinsKnockedDown[currentIndex+1] + this.totalPinsKnockedDown[currentIndex+2]
                currentIndex += 1
            } else if (this.isSpare(currentIndex)) {
                totalScore += this.totalPinsKnockedDown[currentIndex] + this.totalPinsKnockedDown[currentIndex+1] + this.totalPinsKnockedDown[currentIndex+2]
                currentIndex += 2
            } else {
                totalScore += this.totalPinsKnockedDown[currentIndex] + this.totalPinsKnockedDown[currentIndex+1]
                currentIndex += 2
            }
        }
        return totalScore;
    };
};

module.exports = game;