import Map from 'can/map/';
import superMap from 'public/connections/super-map';
import tag from 'can-connect/can/tag/';
import feathers from './feathers';
import 'can/map/define/';

export const Light = can.Map.extend({
  define: {
		name: {
			type: 'string'
		},
    power: {
			type: 'number',
      set(newVal) {
        if(newVal > 100) {
          newVal = 100;
        }
        if(newVal < 0) {
          newVal = 0;
        }
        return newVal;
      }
		}
  }
});

Light.List = can.List.extend({
  Map: Light
}, {});

export const lightConnection = superMap({
	url: feathers.rest('lights'),
	Map: Light,
	List: Light.List,
	name: 'lights'
});


tag("light-model", lightConnection);

feathers.io.on('lights created', light => lightConnection.createInstance(light));
feathers.io.on('lights updated', light => lightConnection.updateInstance(light));
feathers.io.on('lights patched', function(light) {
  lightConnection.updateInstance(light)
});
feathers.io.on('lights removed', function(light) {
  lightConnection.destroyInstance(light);
});
