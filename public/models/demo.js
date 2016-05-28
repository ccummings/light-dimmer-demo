import Map from 'can/map/';
import superMap from 'public/connections/super-map';
import feathers from './feathers';
import 'can/map/define/';

export const Demo = can.Map.extend({
  define: {
    timeLeft: {
      type: 'number',
      value: -1,
      serialize: false
    }
  }
});

Demo.List = can.List.extend({
  Map: Demo
}, {});

export const demoConnection = superMap({
	url: feathers.rest('demo'),
	Map: Demo,
	List: Demo.List,
	name: 'demo'
});

feathers.io.on('demo created', demo => demoConnection.createInstance(demo));
feathers.io.on('demo updated', demo => demoConnection.updateInstance(demo));
feathers.io.on('demo patched', demo => demoConnection.updateInstance(demo));
feathers.io.on('demo removed', function(demo) {
  demoConnection.destroyInstance(demo)
});
