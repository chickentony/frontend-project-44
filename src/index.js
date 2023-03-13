import EvenOddNumber from './games/even-odd-number.js';
import { RADIX, WINING_NUMBER_0F_CORRECT_ANSWERS } from './constants.js';
import {
    askUserAQuestion,
    congratulateUserIfHeWin,
    generateRandomMathSign,
    generateRandomNumber,
    generateWrongAnswerMessage,
    user,
} from './helpers.js';
import Calculator from './games/calculator.js';
import GreatestCommonDivisor from './games/greatest-common-divisor.js';
import ArithmeticProgression from './games/arithmetic progression.js';
import PrimeNumber from './games/prime-number.js';

export function evenGameLogic() {
    let counter = 0;

    while (counter < WINING_NUMBER_0F_CORRECT_ANSWERS) {
        const evenOddNumber = new EvenOddNumber(generateRandomNumber());
        const userAnswer = askUserAQuestion(evenOddNumber.getNumber());

        if (userAnswer === evenOddNumber.getIsNumberEven()) {
            console.log('Correct!');
            counter += 1;
        } else {
            console.log(generateWrongAnswerMessage(userAnswer, evenOddNumber.getIsNumberEven()));
            counter = 0;
            break;
        }
    }

    congratulateUserIfHeWin(counter, user.getUsername());
}

export function calculatorGameLogic() {
    let counter = 0;

    while (counter < WINING_NUMBER_0F_CORRECT_ANSWERS) {
        const calculator = new Calculator(
            generateRandomNumber(),
            generateRandomNumber(),
            generateRandomMathSign()
        );
        const calculatedResult = calculator.calculateResult();
        const answer = askUserAQuestion(calculator.generateStringMathOperation());

        if (parseInt(answer, RADIX) === calculatedResult) {
            console.log('Correct!');
            counter += 1;
        } else {
            console.log(generateWrongAnswerMessage(answer, calculatedResult));
            counter = 0;
            break;
        }

        congratulateUserIfHeWin(counter, user.getUsername());
    }
}

export function gcdGameLogic() {
    let counter = 0;

    while (counter < WINING_NUMBER_0F_CORRECT_ANSWERS) {
        const gcd = new GreatestCommonDivisor(generateRandomNumber(), generateRandomNumber());
        const calculatedResult = gcd.calculateResult();
        const answer = askUserAQuestion(`${gcd.getFirstNum()} ${gcd.getSecondNum()}`);

        if (parseInt(answer, RADIX) === calculatedResult) {
            console.log('Correct!');
            counter += 1;
        } else {
            console.log(generateWrongAnswerMessage(answer, calculatedResult));
            counter = 0;
            break;
        }

        congratulateUserIfHeWin(counter, user.getUsername());
    }
}

export function progressionGameLogic() {
    let counter = 0;

    while (counter < WINING_NUMBER_0F_CORRECT_ANSWERS) {
        const progression = new ArithmeticProgression();
        progression.generateProgression();
        const answer = askUserAQuestion(`${progression.getProgressionInStringRepresentation()}`);

        if (parseInt(answer, RADIX) === progression.getMissingNumberOfProgression()) {
            console.log('Correct!');
            counter += 1;
        } else {
            console.log(
                generateWrongAnswerMessage(answer, progression.getMissingNumberOfProgression())
            );
            counter = 0;
            break;
        }

        congratulateUserIfHeWin(counter, user.getUsername());
    }
}

export function primeGameLogic() {
    let counter = 0;

    while (counter < WINING_NUMBER_0F_CORRECT_ANSWERS) {
        const primeNumber = new PrimeNumber(generateRandomNumber());
        const answer = askUserAQuestion(`${primeNumber.getNumber()}`);

        if (answer === primeNumber.getIsNumberPrime()) {
            console.log('Correct!');
            counter += 1;
        } else {
            console.log(generateWrongAnswerMessage(answer, primeNumber.getIsNumberPrime()));
            counter = 0;
            break;
        }

        congratulateUserIfHeWin(counter, user.getUsername());
    }
}
