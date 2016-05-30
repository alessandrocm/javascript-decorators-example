'use strict';

import './bootstrap';
import Class2 from './lib/class2';

const a = new Class2();
const b = new Class2();

console.log('a: ', JSON.stringify(a._class1));
console.log('a instanceof Class2: ', a instanceof Class2);
console.log('b: ', JSON.stringify(b._class1));
console.log('b instance of Class2: ', b instanceof Class2);
