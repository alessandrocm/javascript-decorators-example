'use strict';

import {injectable, injectTypes} from './inject';

function getRandomIntInclusive(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export const exampleVar = true;
injectable('exampleVar', injectTypes.VALUE)(exampleVar);

@injectable('Class0', injectTypes.SINGLETON)
export default class Class0 {
  constructor() {
    this.class0_createdAt = new Date();
    this.class0_number = getRandomIntInclusive(101,200);
  }
}
