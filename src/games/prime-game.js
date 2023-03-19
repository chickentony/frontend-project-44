import mainGameLogic from '../index.js';
import { generateRandomNumber } from '../helpers.js';

const primeNumberBefore20 = [2, 3, 5, 7, 11, 13, 17, 19];
const task = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isNumberPrime = (number) => {
  if (primeNumberBefore20.includes(number)) {
    return 'yes';
  }

  return 'no';
};

const getArrWithQuestionAndAnswer = () => {
  const number = generateRandomNumber(1, 20);
  const correctAnswer = isNumberPrime(number);

  return [number, correctAnswer];
};

const playPrimeGame = () => {
  mainGameLogic(getArrWithQuestionAndAnswer, task);
};

export default playPrimeGame;
