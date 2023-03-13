import { generateRandomNumber } from '../helpers.js';
import {
    ARITHMETIC_PROGRESSION_HIDE_ELEMENT_STRING,
    LENGTH_OF_PROGRESSION,
    MAX_NUMBER_OF_ELEMENTS_IN_PROGRESSION,
    MAX_VALUE_OF_RANDOM_NUMBER,
} from '../constants.js';

export default class ArithmeticProgression {
    progression = [];

    firstNumberOfProgression = 0;

    secondNumberOfProgression = 0;

    missingNumberOfProgression;

    setFirstNumberOfProgression(number) {
        if (!(number instanceof Number)) {
            throw new Error('Argument must be number type');
        }

        this.firstNumberOfProgression = number;
    }

    setSecondNumberForProgression(number) {
        if (!(number instanceof Number)) {
            throw new Error('Argument must be number type');
        }

        this.secondNumberOfProgression = number;
    }

    setMissingNumberOfProgression(number) {
        if (!(number instanceof Number)) {
            throw new Error('Argument must be number type');
        }

        this.missingNumberOfProgression = number;
    }

    addValueToProgression(value) {
        this.progression.push(value);
    }

    getProgressionInStringRepresentation() {
        return this.progression.join(' ');
    }

    getMissingNumberOfProgression() {
        return this.missingNumberOfProgression;
    }

    replaceProgressionElementByIndex(index, value) {
        if (index > LENGTH_OF_PROGRESSION) {
            throw new Error('Index number must be less or equals progression length');
        }

        this.setMissingNumberOfProgression(this.progression[index]);
        this.progression[index] = value;
    }

    generateFirstNumberForProgression() {
        while (this.firstNumberOfProgression === 0) {
            this.setFirstNumberOfProgression(generateRandomNumber());
        }
    }

    generateSecondNumberForProgression() {
        this.setSecondNumberForProgression(
            generateRandomNumber(this.firstNumberOfProgression, MAX_VALUE_OF_RANDOM_NUMBER),
        );
    }

    hideRandomElementOfProgression() {
        const randomElementNumber = Math.floor(Math.random() * LENGTH_OF_PROGRESSION);
        this.replaceProgressionElementByIndex(
            randomElementNumber,
            ARITHMETIC_PROGRESSION_HIDE_ELEMENT_STRING,
        );
    }

    generateProgression() {
        this.generateFirstNumberForProgression();
        this.generateSecondNumberForProgression();
        const deltaOfProgression = this.secondNumberOfProgression - this.firstNumberOfProgression;

        for (let i = 0; i < MAX_NUMBER_OF_ELEMENTS_IN_PROGRESSION; i += 1) {
            if (i === 0) {
                this.addValueToProgression(this.firstNumberOfProgression);
            } else if (i === 1) {
                this.addValueToProgression(this.secondNumberOfProgression);
            } else {
                this.addValueToProgression(
                    this.progression[this.progression.length - 1] + deltaOfProgression,
                );
            }
        }

        this.hideRandomElementOfProgression();
    }
}
