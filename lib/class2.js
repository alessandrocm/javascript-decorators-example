'use strict';

import inject from './inject.js';

@inject(['Class1','Class0','exampleVar'])
export default class Class2 {
  constructor(class1, class0, var1) {
    this.class2_class1 = class1;
    this.class2_class0 = class0;
    this.class2_var = var1;
  }
}
