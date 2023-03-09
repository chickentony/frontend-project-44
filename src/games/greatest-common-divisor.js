export class GreatestCommonDivisor {
    firstNum;

    secondNum;

    constructor(firstNum, secondNum) {
        this.firstNum = firstNum;
        this.secondNum = secondNum;
    }

    calculateResult() {
        let x = Math.abs(this.firstNum);
        let y = Math.abs(this.secondNum);

        while (y) {
            let c = y;
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
