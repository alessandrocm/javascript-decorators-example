'use strict';

import inject, {injectable} from './inject';

function getRandomIntInclusive(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

@injectable('Class1')
@inject(['Class0'])
export default class Class1 {
  constructor(class0) {
    this._class0 = class0;
    this.name = "Fred" + getRandomIntInclusive(1,100);
  }
}
