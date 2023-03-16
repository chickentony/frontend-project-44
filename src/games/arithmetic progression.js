import { generateRandomNumber } from '../helpers.js';
import { mainGameLogic } from '../index.js';

const task = 'What number is missing in the progression?';

const getProgression = () => {
    const progression = [generateRandomNumber(0, 20), generateRandomNumber(20, 100)];
    const delta = progression[progression.length - 1] - progression[0];

    for (let i = 2; i < 10; i += 1) {
        progression.push(progression[progression.length - 1] + delta);
    }

    return progression;
};

const hideRandomElementOfProgression = (progression) => {
    const randomIndexOfProgression = generateRandomNumber(0, progression.length);
    const hiddenElement = String(progression[randomIndexOfProgression]);
    progression[randomIndexOfProgression] = '..';

    return [hiddenElement, progression];
};

const getArrWithQuestionAndAnswer = () => {
    const progression = getProgression();
    const progressionWithHiddenElement = hideRandomElementOfProgression(progression);
    const correctAnswer = progressionWithHiddenElement[0];
    const question = progressionWithHiddenElement[1].join(' ');

    return [question, correctAnswer];
};

const playProgressionGame = () => {
    mainGameLogic(getArrWithQuestionAndAnswer, task);
};

export default playProgressionGame;
