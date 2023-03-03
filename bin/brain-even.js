#!/usr/bin/env node

import { evenGameLogic } from '../src/index.js';
import { welcomeMessage } from '../src/helpers.js';

welcomeMessage();
console.log('Answer "yes" if the number is even, otherwise answer "no".');
evenGameLogic();
