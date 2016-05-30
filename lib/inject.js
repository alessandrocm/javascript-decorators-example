'use strict';

const dependencies = {};

export function injectable(alias) {
  return function decorator(target){
    console.log(`Tracking ${target.name} as ${alias} as injectable`);
    dependencies[alias || target.name] = target;
  };
}

export default function inject(needs) {

  function factory() {
    return needs.map(needed => {
      if (dependencies[needed]) {
        return new dependencies[needed];
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
