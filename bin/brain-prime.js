#!/usr/bin/env node

import { welcomeMessage } from '../src/helpers.js';
import { primeGameLogic } from '../src/index.js';

welcomeMessage();
console.log('Answer "yes" if given number is prime. Otherwise answer "no".');
primeGameLogic();
