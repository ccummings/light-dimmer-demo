import Map from 'can/map/';
import 'can/map/define/';
import route from 'can/route/';
import 'can/route/pushstate/';

import {Light, lightConnection} from 'public/models/light';

const VM = Map.extend({
	define: {
		light: {
			get(val, resolve) {
				lightConnection.get({id: 1}).then(light => {
					lightConnection.addInstanceReference(light);
					resolve(light);
				});
			}
		}
	}
});

export default VM;
