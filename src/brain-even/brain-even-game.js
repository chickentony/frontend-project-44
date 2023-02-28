import readlineSync from 'readline-sync';
import EvenOddNumber from './even-odd-number.js';
import { WINING_NUMBER_0F_CORRECT_ANSWERS, EVEN_GAME_POSSIBLE_USER_ANSWERS } from '../constants.js';
import { congratulationMessage, username } from '../helpers.js';

function gameQuestion(randomNumber) {
    return readlineSync.question(`Question: ${randomNumber}\nYour answer: `);
}

function generateWrongAnswerMessage(answer) {
    const message = `Let's try again, ${username}!`;
    switch (answer) {
        case 'yes':
            return `'${answer}' is wrong answer ;(. Correct answer was 'no'.\n${message}`;
        case 'no':
            return `'${answer}' is wrong answer ;(. Correct answer was 'yes'.\n${message}`;
        default:
            return '';
    }
}

export function mainEvent() {
    let counter = 0;

    while (counter < WINING_NUMBER_0F_CORRECT_ANSWERS) {
        const evenOddNumber = new EvenOddNumber();
        const answer = gameQuestion(evenOddNumber.getNumber());
        if (
            answer !== EVEN_GAME_POSSIBLE_USER_ANSWERS.YES
            && answer !== EVEN_GAME_POSSIBLE_USER_ANSWERS.NO
        ) {
            console.log('Your answer is invalid');
            break;
        }

        if (answer === EVEN_GAME_POSSIBLE_USER_ANSWERS.YES && evenOddNumber.getNumberOddEvenProperty() === 'even') {
            console.log('Correct!');
            counter += 1;
        } else if (
            answer === EVEN_GAME_POSSIBLE_USER_ANSWERS.NO && evenOddNumber.getNumberOddEvenProperty() === 'odd'
        ) {
            console.log('Correct!');
            counter += 1;
        } else {
            console.log(generateWrongAnswerMessage(answer));
            counter = 0;
            break;
        }
    }

    if (counter === WINING_NUMBER_0F_CORRECT_ANSWERS) {
        congratulationMessage(username);
    }
}
