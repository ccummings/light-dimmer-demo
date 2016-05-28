'use strict';

const hooks = require('./hooks');
const service = require('feathers-memory');

module.exports = function(){
  const app = this;

  let options = {
    startId: 1,
    paginate: {
      default: 5,
      max: 25
    }
  };

  app.use('/demo', service(options));

  const demoService = app.service('/demo');

  // Set up our before hooks
  demoService.before(hooks.before);

  // Set up our after hooks
  demoService.after(hooks.after);

};
