import {mainGameLogic} from "../index.js";
import {generateRandomNumber} from "../helpers.js";

const gameRule = 'Find the greatest common divisor of given numbers.';

const getGCD = (numberAsString) => {
    console.log(numberAsString);
    const numArr = numberAsString.split(' ');
    let x = Math.abs(numArr[0]);
    let y = Math.abs(numArr[1]);

    while (y) {
        const c = y;
        y = x % y;
        x = c;
    }

    return String(x);
}

const generateQuestionString = () => {
    const firstNum = generateRandomNumber();
    const secondNum = generateRandomNumber();

    return `${firstNum} ${secondNum}`;
}

export const playGCDGame = () => {
    mainGameLogic(generateQuestionString, getGCD, gameRule);
}
