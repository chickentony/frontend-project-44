export default class GreatestCommonDivisor {
    firstNum;

    secondNum;

    constructor(firstNum, secondNum) {
        if (!(firstNum instanceof Number) || !(secondNum instanceof Number)) {
            throw new Error('First and second values must be a number');
        }

        this.firstNum = firstNum;
        this.secondNum = secondNum;
    }

    calculateResult() {
        let x = Math.abs(this.firstNum);
        let y = Math.abs(this.secondNum);

        while (y) {
            const c = y;
            y = x % y;
            x = c;
        }

        return x;
    }

    getFirstNum() {
        return this.firstNum;
    }

    getSecondNum() {
        return this.secondNum;
    }
}
