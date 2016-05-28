'use strict';

const hooks = require('feathers-hooks');
const limitPower = require('./limit-power');

exports.before = {
  all: [],
  find: [],
  get: [],
  create: [limitPower()],
  update: [limitPower()],
  patch: [limitPower()],
  remove: []
};

exports.after = {
  all: [],
  find: [],
  get: [],
  create: [],
  update: [],
  patch: [],
  remove: []
};
