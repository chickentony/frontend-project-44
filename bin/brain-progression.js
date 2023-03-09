#!/usr/bin/env node

import { welcomeMessage } from '../src/helpers.js';
import {progressionGameLogic} from "../src/index.js";


welcomeMessage();
console.log('What number is missing in the progression?');
progressionGameLogic();
