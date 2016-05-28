import Map from 'can/map/';
import superMap from 'public/connections/super-map';
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

feathers.io.on('lights created', light => lightConnection.createInstance(light));
feathers.io.on('lights updated', light => lightConnection.updateInstance(light));
feathers.io.on('lights patched', light => lightConnection.updateInstance(light));
feathers.io.on('lights removed', light => lightConnection.destroyInstance(light));
