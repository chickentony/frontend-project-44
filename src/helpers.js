import readlineSync from 'readline-sync';
import getUsername from './cli.js';

export const welcomeMessage = () => {
  console.log('Welcome to the Brain Games!');
  const username = getUsername();
  console.log(`Hello, ${username}`);
  return username;
};

export const generateRandomNumber = (
  minValueOfGeneratedNumber = 0,
  maxValueOfGeneratedNumber = 20,
) => {
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
};

export const askUserAQuestion = (questionCondition) => readlineSync.question(`Question: ${questionCondition}\nYour answer: `);

export const generateWrongAnswerMessage = (answer, correctAnswer, username) => {
  const looseMessage = `Let's try again, ${username}!`;
  return `'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.\n${looseMessage}`;
};
