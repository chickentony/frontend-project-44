import { mainGameLogic } from '../index.js';
import { generateRandomNumber } from '../helpers.js';

const task = 'Find the greatest common divisor of given numbers.';

const getGCD = (firstNum, secondNum) => {
    let x = Math.abs(firstNum);
    let y = Math.abs(secondNum);

    while (y) {
        const c = y;
        y = x % y;
        x = c;
    }

    return String(x);
};

const getArrWithQuestionAndAnswer = () => {
    const firstNum = generateRandomNumber();
    const secondNum = generateRandomNumber();
    const correctAnswer = getGCD(firstNum, secondNum);
    const question = `${firstNum} ${secondNum}`;

    return [question, correctAnswer];
};

export const playGCDGame = () => {
    mainGameLogic(getArrWithQuestionAndAnswer, task);
};
