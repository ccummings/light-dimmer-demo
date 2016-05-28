'use strict';

const path = require('path');
const serveStatic = require('feathers').static;
const feathers = require('feathers');
const configuration = require('feathers-configuration');
const hooks = require('feathers-hooks');
const rest = require('feathers-rest');
const bodyParser = require('body-parser');
const socketio = require('feathers-socketio');
const services = require('./services');

const app = feathers();

app.configure(configuration(path.join(__dirname, '..')));

app.use('/', serveStatic( app.get('public') ))
  .use('/package.json', serveStatic( 'package.json' ))
  .use('/node_modules', serveStatic( 'node_modules' ))
  .use(bodyParser.json())
  .use(bodyParser.urlencoded({ extended: true }))
  .configure(hooks())
  .configure(rest())
  .configure(socketio())
  .configure(services);

app.service('lights').create({
  name: 'Living Room',
  power: 100
});

module.exports = app;
