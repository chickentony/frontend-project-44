import { generateRandomNumber } from '../helpers.js';
import mainGameLogic from '../index.js';

const task = 'What number is missing in the progression?';
const maxLengthOfProgression = 10;
const startIndexOfProgression = 2;
const separator = ' ';
const hidingChar = '..';

const getProgression = () => {
  const progression = [generateRandomNumber(0, 20), generateRandomNumber(20, 100)];
  const delta = progression[progression.length - 1] - progression[0];

  for (let i = startIndexOfProgression; i < maxLengthOfProgression; i += 1) {
    progression.push(progression[progression.length - 1] + delta);
  }

  return progression;
};

const hideRandomElementOfProgression = (progression) => {
  const resultProgression = progression;
  const randomIndexOfProgression = generateRandomNumber(0, resultProgression.length);
  const hiddenElement = String(resultProgression[randomIndexOfProgression]);
  resultProgression[randomIndexOfProgression] = hidingChar;

  return [hiddenElement, resultProgression];
};

const getArrWithQuestionAndAnswer = () => {
  const progression = getProgression();
  const progressionWithHiddenElement = hideRandomElementOfProgression(progression);
  const correctAnswer = progressionWithHiddenElement[0];
  const question = progressionWithHiddenElement[1].join(separator);

  return [question, correctAnswer];
};

const playProgressionGame = () => {
  mainGameLogic(getArrWithQuestionAndAnswer, task);
};

export default playProgressionGame;
