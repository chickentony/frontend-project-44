import {YES_OR_NO} from "../constants.js";
import {mainGameLogic} from "../index.js";
import {generateRandomNumber} from "../helpers.js";

const gameRule = 'Answer "yes" if the number is even, otherwise answer "no".';

const isNumberEven = (number) => {
    if (number % 2 === 0) {
        return YES_OR_NO.YES;
    }

    return YES_OR_NO.NO;
}


export const playEvenGame = () => {
    mainGameLogic(generateRandomNumber, isNumberEven, gameRule);
}
