import {
    askUserAQuestion,
    generateWrongAnswerMessage,
    welcomeMessage,
} from './helpers.js';

export const mainGameLogic = (getQuestion, answerCheck, gameRuleMessage) => {
    let round = 0;
    let finalRoundNumber = 3;
    const username = welcomeMessage();
    console.log(gameRuleMessage);

    while (round < finalRoundNumber) {
        const question = getQuestion();
        const userAnswer = askUserAQuestion(question);
        const correctAnswer = answerCheck(question);

        if (String(userAnswer) === correctAnswer) {
            console.log('Correct!');
            round += 1;
        } else {
            console.log(generateWrongAnswerMessage(userAnswer, correctAnswer, username));
            round = 0;
            break;
        }
    }

    if (round) console.log(`Congratulations, ${username}!`)
}
