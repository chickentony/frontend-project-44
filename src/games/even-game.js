import mainGameLogic from '../index.js';
import { generateRandomNumber } from '../helpers.js';

const task = 'Answer "yes" if the number is even, otherwise answer "no".';

const isNumberEven = (number) => {
  if (number % 2 === 0) {
    return 'yes';
  }

  return 'no';
};

const getArrWithQuestionAndAnswer = () => {
  const number = generateRandomNumber();
  const correctAnswer = isNumberEven(number);

  return [number, correctAnswer];
};

const playEvenGame = () => {
  mainGameLogic(getArrWithQuestionAndAnswer, task);
};

export default playEvenGame;
