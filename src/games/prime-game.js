import { YES_OR_NO } from '../constants.js';
import {mainGameLogic} from "../index.js";
import {generateRandomNumber} from "../helpers.js";

const primeNumberBefore20 = [2, 3, 5, 7, 11, 13, 17, 19];
const gameRule = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isNumberPrime = (number) => {
    if (primeNumberBefore20.includes(number)) {
        return YES_OR_NO.YES;
    }

    return YES_OR_NO.NO;
}

export const playPrimeGame = () => {
    mainGameLogic(generateRandomNumber, isNumberPrime, gameRule);
}
