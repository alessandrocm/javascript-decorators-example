'use strict';

import inject, {injectable, injectTypes} from './inject';

function getRandomIntInclusive(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

@injectable('Class1', injectTypes.CLASS)
@inject(['Class0'])
export default class Class1 {
  constructor(class0) {
    this.class1_class0 = class0;
    this.class1_name = "Fred" + getRandomIntInclusive(1,100);
  }
}
