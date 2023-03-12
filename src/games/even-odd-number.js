import { YES_OR_NO } from '../constants.js';

export default class EvenOddNumber {
    number;

    isNumberEven;

    constructor(number) {
        this.number = number;
        this.checkIfNumberIsEven();
    }

    setIsNumberEven(flag) {
        this.isNumberEven = flag;
    }

    getNumber() {
        return this.number;
    }

    getIsNumberEven() {
        return this.isNumberEven;
    }

    checkIfNumberIsEven() {
        this.number % 2 === 0 ? this.setIsNumberEven(YES_OR_NO.YES) : this.setIsNumberEven(YES_OR_NO.NO);
    }
}
