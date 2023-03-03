import getUsername from './cli.js';
import { MATH_OPERATION, WINING_NUMBER_0F_CORRECT_ANSWERS } from './constants.js';
import readlineSync from 'readline-sync';

export let username = '';

function congratulationMessage(username) {
    console.log(`Congratulations, ${username}`);
}

export function welcomeMessage() {
    console.log('Welcome to the Brain Games!');
    username = getUsername();
    console.log(`Hello ${username}`);
}

export function generateRandomNumber() {
    return Math.floor(Math.random() * 100);
}

export function generateRandomMathSign() {
    return MATH_OPERATION[Math.floor(Math.random() * MATH_OPERATION.length)];
}

export function askUserAQuestion(questionCondition) {
    return readlineSync.question(`Question: ${questionCondition}\nYour answer: `);
}

export function congratulateUserIfHeWin(count, username) {
    if (count === WINING_NUMBER_0F_CORRECT_ANSWERS) {
        return congratulationMessage(username);
    }

    return '';
}
