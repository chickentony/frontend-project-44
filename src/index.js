import {
  askUserAQuestion,
  generateWrongAnswerMessage,
  welcomeMessage,
} from './helpers.js';

const mainGameLogic = (getQuestionAndAnswer, gameRuleMessage) => {
  let round = 0;
  const finalRoundNumber = 3;
  const username = welcomeMessage();
  console.log(gameRuleMessage);

  while (round < finalRoundNumber) {
    const questionAndAnswer = getQuestionAndAnswer();
    const userAnswer = askUserAQuestion(questionAndAnswer[0]);

    if (String(userAnswer) === questionAndAnswer[1]) {
      console.log('Correct!');
      round += 1;
    } else {
      console.log(generateWrongAnswerMessage(userAnswer, questionAndAnswer[1], username));
      round = 0;
      break;
    }
  }

  if (round) console.log(`Congratulations, ${username}!`);
};

export default mainGameLogic;
