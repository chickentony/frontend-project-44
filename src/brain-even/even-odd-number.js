export default class EvenOddNumber {
    #number;

    #numberOddEvenProperty;

    constructor() {
        this.setNumber(this.generateRandomNumber());
        this.setNumberOddEvenProperty(this.getOddEvenOfNumber(this.#number));
    }

    getOddEvenOfNumber(number) {
        if (number % 2 === 0) {
            return 'even';
        }

        return 'odd';
    }

    generateRandomNumber() {
        return Math.floor(Math.random() * 100);
    }

    setNumber(number) {
        this.#number = number;
    }

    setNumberOddEvenProperty(oddEvenProperty) {
        this.#numberOddEvenProperty = oddEvenProperty;
    }

    getNumber() {
        return this.#number;
    }

    getNumberOddEvenProperty() {
        return this.#numberOddEvenProperty;
    }
}
