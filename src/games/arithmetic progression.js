export default class ArithmeticProgression {
    progression = [];

    firstNumberOfProgression = 0;

    secondNumberOfProgression = 0;

    missingNumberOfProgression;

    setFirstNumberOfProgression(number) {
        this.firstNumberOfProgression = number;
    }

    setSecondNumberForProgression(number) {
        this.secondNumberOfProgression = number;
    }

    setMissingNumberOfProgression(number) {
        this.missingNumberOfProgression = number;
    }

    getRandomArbitrary(min, max) {
        return Math.floor(Math.random() * (max - min) + min);
    }

    addValueToProgression(value) {
        this.progression.push(value);
    }

    getProgression() {
        return this.progression;
    }

    getMissingNumberOfProgression() {
        return this.missingNumberOfProgression;
    }

    replaceProgressionElementByIndex(index, value) {
        this.setMissingNumberOfProgression(this.progression[index]);
        this.progression[index] = value;
    }

    generateFirstNumberForProgression() {
        while (this.firstNumberOfProgression === 0) {
            this.setFirstNumberOfProgression(Math.floor(Math.random() * 90));
        }
    }

    generateSecondNumberForProgression() {
        this.setSecondNumberForProgression(this.getRandomArbitrary(this.firstNumberOfProgression, 90));
    }

    hideRandomElementOfProgression() {
        const randomElementNumber = Math.floor(Math.random() * 9);

        this.replaceProgressionElementByIndex(randomElementNumber, "..");
    }

    generateProgression() {
        this.generateFirstNumberForProgression();
        this.generateSecondNumberForProgression();
        const deltaOfProgression = this.secondNumberOfProgression - this.firstNumberOfProgression;

        for (let i = 0; i < 10; i += 1) {
            if (i === 0) {
                this.addValueToProgression(this.firstNumberOfProgression);
            } else if (i === 1) {
                this.addValueToProgression(this.secondNumberOfProgression);
            } else {
                this.addValueToProgression(this.progression[this.progression.length - 1] + deltaOfProgression);
            }
        }

        this.hideRandomElementOfProgression();
    }
}
