'use strict';

import inject, {injectable, injectTypes} from './inject';

function getRandomIntInclusive(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

injectable('exampleVar', injectTypes.VALUE)(exampleVar);
export const exampleVar = true;


export const exampleFunc = injectable('exampleFunc', injectTypes.FUNC)(
  inject(['Class1'])(exampleFunction, injectTypes.FUNC)
);
function exampleFunction(param) {
  console.log(`exampleFunc param: ${JSON.stringify(param)}`);
}

@injectable('Class0', injectTypes.SINGLETON)
export default class Class0 {
  constructor() {
    this.class0_createdAt = new Date();
    this.class0_number = getRandomIntInclusive(101,200);
  }
}
