'use strict';

const hooks = require('feathers-hooks');
const countDown = require('./count-down');

exports.before = {
  all: [],
  find: [],
  get: [],
  create: [],
  update: [],
  patch: [],
  remove: []
};

exports.after = {
  all: [],
  find: [],
  get: [],
  create: [countDown()],
  update: [],
  patch: [],
  remove: []
};
