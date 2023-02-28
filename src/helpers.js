import getUsername from './cli.js';

export let username = '';

export function congratulationMessage(username) {
    console.log(`Congratulations, ${username}`);
}

export function welcomeMessage() {
    console.log('Welcome to the Brain Games!');
    username = getUsername();
    console.log(`Hello ${username}`);
}
