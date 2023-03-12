import { YES_OR_NO, PRIME_NUMBERS_BEFORE_100 } from "../constants.js";

export default class PrimeNumber {
    number;

    isNumberPrime;

    constructor(number) {
        this.number = number;
        this.checkIfNumberIsPrime();
    }

    getNumber() {
        return this.number;
    }

    setIsNumberPrime(flag) {
        this.isNumberPrime = flag;
    }

    getIsNumberPrime() {
        return this.isNumberPrime;
    }

    checkIfNumberIsPrime() {
        PRIME_NUMBERS_BEFORE_100.includes(this.number) ? this.setIsNumberPrime(YES_OR_NO.YES)
            : this.setIsNumberPrime(YES_OR_NO.NO);
    }
}
