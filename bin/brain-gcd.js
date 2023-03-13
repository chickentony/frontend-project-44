#!/usr/bin/env node

import { welcomeMessage } from '../src/helpers.js';
import { gcdGameLogic } from '../src/index.js';

welcomeMessage();
console.log('Find the greatest common divisor of given numbers.');
gcdGameLogic();
