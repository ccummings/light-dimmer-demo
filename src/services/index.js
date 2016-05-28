'use strict';
const light = require('./light');
const demo = require('./demo');

module.exports = function() {
  const app = this;


  app.configure(light);
  app.configure(demo);
};
