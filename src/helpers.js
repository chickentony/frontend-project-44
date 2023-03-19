import readlineSync from 'readline-sync';
import getUsername from './cli.js';

export function welcomeMessage() {
  console.log('Welcome to the Brain Games!');
  const username = getUsername();
  console.log(`Hello, ${username}`);
  return username;
}

export function generateRandomNumber(
  minValueOfGeneratedNumber = 0,
  maxValueOfGeneratedNumber = 20,
) {
  if (maxValueOfGeneratedNumber < minValueOfGeneratedNumber) {
    throw new Error(
      'Max value of number can not be less than min value',
    );
  }
  return Math.floor(
    Math.random()
      * (maxValueOfGeneratedNumber - minValueOfGeneratedNumber)
      + minValueOfGeneratedNumber,
  );
}

export function askUserAQuestion(questionCondition) {
  return readlineSync.question(`Question: ${questionCondition}\nYour answer: `);
}

export function generateWrongAnswerMessage(answer, correctAnswer, username) {
  const looseMessage = `Let's try again, ${username}!`;
  return `'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.\n${looseMessage}`;
}
