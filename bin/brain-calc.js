#!/usr/bin/env node

import { welcomeMessage } from '../src/helpers.js';
import { calculatorGameLogic } from '../src/index.js';

welcomeMessage();
console.log('What is the result of the expression?');
calculatorGameLogic();
