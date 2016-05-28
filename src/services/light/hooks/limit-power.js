'use strict';

module.exports = function(options) {
  return function(hook) {
    if(hook.data.power > 100) {
      hook.data.power = 100;
    }

    if(hook.data.power < 0) {
      hook.data.power = 0;
    }

    hook.data.power = Math.round(hook.data.power, 0);

    return hook;
  };
};
