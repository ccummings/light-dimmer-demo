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

  app.use('/lights', service(options));


  const lightService = app.service('/lights');

  // Set up our before hooks
  lightService.before(hooks.before);

  // Set up our after hooks
  lightService.after(hooks.after);

};
