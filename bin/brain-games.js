#!/usr/bin/env node

import getUsername from '../src/cli.js';

console.log('Welcome to the Brain Games!');
const username = getUsername();
console.log(`Hello ${username}`);
