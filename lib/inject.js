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
        if(need.type === CLASS) {
          return new need.target();
        } else if (need.type === SINGLETON) {
          return need.instance = need.instance ? need.instance : new need.target();
        }
        return need.target;
      }
    });
  }

  return function decorator(target) {

    function ProxyClass(...overrides) {

      const params = [];
      const injectables = factory();
      const diff = injectables.length - overrides.length;
      if (overrides.length) {
        overrides.forEach((value, index) => {
          params.push((typeof value !== 'undefined') ? value : injectables[index]);
        });
      }

      if (diff > 0) {
        params.push(...injectables.slice(overrides.length));
      }

      console.log(`${target.name} Params: `, JSON.stringify(params));
      target.call(this,...params);
    };

    ProxyClass.prototype = Object.create(target.prototype);
    return ProxyClass;
  }
}
