'use strict';

module.exports = function(options) {
  return function(hook) {
    const demoService = hook.app.service('/demo');
    const lightService = hook.app.service('/lights');
    const powerStep = hook.result.change / (hook.result.duration/1000);
    let timeLeft = hook.data.duration;
    const lightId = hook.data.light;

    function update(){
      timeLeft -= 1000;

      demoService.patch(hook.result.id, {
        timeLeft: timeLeft
      });

      lightService.get(lightId).then(light => {
        lightService.patch(lightId, {
          power: light.power + powerStep
        });
      });

      if(timeLeft === 0 ){
        clearInterval(timer);
        demoService.remove(hook.result.id);
      }
    };

    let timer = setInterval(update, 1000);

    hook.result.timeLeft = hook.result.duration;
  };
};
