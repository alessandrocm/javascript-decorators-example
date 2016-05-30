'use strict';

const dependencies = {};

const CLASS = Symbol();
const SINGLETON = Symbol();
const FUNC = Symbol();
const VALUE = Symbol();

export const injectTypes = {
  CLASS,
  SINGLETON,
  FUNC,
  VALUE
};

export function injectable(alias, type = injectTypes.CLASS) {

  return function decorator(target){
    console.log(`Tracking ${target.name || alias} as ${alias} as injectable`);
    dependencies[alias || target.name] = {
      name: alias || target.name,
      type,
      target
    };
  };
}

export default function inject(needs) {

  function factory() {
    return needs.map(needed => {
      let need = dependencies[needed];
      if (need) {
        console.log('Need: ' + need);
        if(need.type === CLASS) {
          return new need.target();
        } else if (need.type === SINGLETON) {
          const instance = need.instance = need.instance ? need.instance : new need.target();
          return instance;
        }
        return need.target;
      }
    });
  }

  return function decorator(target) {

    function ProxyClass() {
      target.call(this,...factory());
    };

    console.log(`Creating proxy for : ${target.name}`);
    ProxyClass.prototype = Object.create(target.prototype);
    return ProxyClass;
  }
}
