'use strict';

import inject from './inject.js';

@inject(['Class1','Class0','exampleVar'])
export default class Class2 {
  constructor(class1, class0, var1) {
    console.log('class2 args: ', arguments);
    this._class1 = class1;
    this._class0 = class0;
    this._var = var1;
  }
}
