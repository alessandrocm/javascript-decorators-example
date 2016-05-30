'use strict';

import './bootstrap';
import Class2 from './lib/class2';
import Class1 from './lib/class1';
import Class0 from './lib/class0';

const x = false;
const y = new Class0();
const z = new Class1();

const a = new Class2(z,y,x);
const b = new Class2();
const c = new Class2(undefined,y);

console.log('a: ', JSON.stringify(a));
console.log('a instanceof Class2: ', a instanceof Class2);
console.log('b: ', JSON.stringify(b));
console.log('b instance of Class2: ', b instanceof Class2);
console.log('c: ', JSON.stringify(c));
console.log('c instance of Class2: ', c instanceof Class2);
