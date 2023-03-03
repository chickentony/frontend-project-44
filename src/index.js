import EvenOddNumber from './games/even-odd-number.js';
import { WINING_NUMBER_0F_CORRECT_ANSWERS } from './constants.js';
import {
    askUserAQuestion, congratulateUserIfHeWin,
    generateRandomMathSign,
    generateRandomNumber,
    username
} from './helpers.js';
import Calculator from './games/calculator.js';

function generateWrongAnswerMessage(answer, correctAnswer) {
    const looseMessage = `Let's try again, ${username}!`;
    return `'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.\n${looseMessage}`;
}

export function evenGameLogic() {
    let counter = 0;

    while (counter < WINING_NUMBER_0F_CORRECT_ANSWERS) {
        const evenOddNumber = new EvenOddNumber(generateRandomNumber());
        const userAnswer = askUserAQuestion(evenOddNumber.getNumber());
        const correctAnswer = evenOddNumber.getNumberOddEvenProperty();

        if (userAnswer === correctAnswer) {
            console.log('Correct!');
            counter += 1;
        } else {
            console.log(generateWrongAnswerMessage(userAnswer, correctAnswer));
            counter = 0;
            break;
        }
    }

    congratulateUserIfHeWin(counter, username);
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

        if (parseInt(answer) === calculatedResult) {
            console.log('Correct!');
            counter += 1;
        } else {
            console.log(generateWrongAnswerMessage(answer, calculatedResult));
            counter = 0;
            break;
        }

        congratulateUserIfHeWin(counter, username);
    }
}
