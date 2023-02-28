#!/usr/bin/env node

import { mainEvent } from '../src/brain-even/brain-even-game.js';
import { welcomeMessage } from '../src/helpers.js';

welcomeMessage();
console.log('Answer "yes" if the number is even, otherwise answer "no".');
mainEvent();
