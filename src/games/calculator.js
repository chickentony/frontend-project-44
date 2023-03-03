export default class Calculator {
    firstNum;

    secondNum;

    sign;

    constructor(firstNum, secondNum, sign) {
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
