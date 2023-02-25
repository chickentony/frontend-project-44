import readlineSync from 'readline-sync';

export default function getUsername() {
    return readlineSync.question('May I have your name?');
}
