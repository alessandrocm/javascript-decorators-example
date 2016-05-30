'use strict';

import {injectable} from './inject';

function getRandomIntInclusive(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

@injectable('Class0')
export default class Class0 {
  constructor() {
    this.createdAt = new Date();
    this.number = getRandomIntInclusive(101,200);
  }
}
