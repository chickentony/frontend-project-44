import { mainGameLogic } from '../index.js';
import { generateRandomNumber } from '../helpers.js';

const mathOperations = ['-', '*', '+'];
const task = 'What is the result of the expression?';

const getRandomMathOperation = () => mathOperations[
    Math.floor(Math.random() * mathOperations.length)
    ];

const calculate = (firstNum, secondNum, sign) => {
    switch (sign) {
        case '+':
            return String(firstNum + secondNum);
        case '-':
            return String(firstNum - secondNum);
        case '*':
            return String(firstNum * secondNum);
        default:
            throw new Error('Unsupported math operation');
    }
};

const getArrWithQuestionAndAnswer = () => {
    const firstNumber = generateRandomNumber();
    const secondNumber = generateRandomNumber();
    const sign = getRandomMathOperation();
    const question = `${firstNumber} ${sign} ${secondNumber}`;
    const correctAnswer = calculate(firstNumber, secondNumber, sign);
    return [question, String(correctAnswer)];
};

const playCalcGame = () => {
    mainGameLogic(getArrWithQuestionAndAnswer, task);
};

export default playCalcGame;
