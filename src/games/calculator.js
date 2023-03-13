export default class Calculator {
    firstNum;

    secondNum;

    sign;

    constructor(firstNum, secondNum, sign) {
        if (!(firstNum instanceof Number) || !(secondNum instanceof Number)) {
            throw new Error('First and second values must be a number');
        }

        this.firstNum = firstNum;
        this.secondNum = secondNum;
        this.sign = sign;
    }

    calculateResult() {
        switch (this.sign) {
            case '+':
                return this.firstNum + this.secondNum;
            case '-':
                return this.firstNum - this.secondNum;
            case '*':
                return this.firstNum * this.secondNum;
            default:
                return 0;
        }
    }

    generateStringMathOperation() {
        return `${this.firstNum} ${this.sign} ${this.secondNum}`;
    }
}
