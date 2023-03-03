import { EVEN_GAME_POSSIBLE_USER_ANSWERS } from '../constants.js';

export default class EvenOddNumber {
    #number;

    #numberOddEvenProperty;

    constructor(number) {
        this.setNumber(number);
        this.setNumberOddEvenProperty(this.getOddEvenOfNumber(this.#number));
    }

    getOddEvenOfNumber(number) {
        if (number % 2 === 0) {
            return EVEN_GAME_POSSIBLE_USER_ANSWERS.YES;
        }

        return EVEN_GAME_POSSIBLE_USER_ANSWERS.NO;
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
