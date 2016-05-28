import Map from 'can/map/';
import 'can/map/define/';

import Light from 'public/models/light';

const VM = Map.extend({
	define: {
		light: {
			Type: Light
		}
	},
	changePower: function(value) {
		var currentPower = this.attr('light.power');
		this.attr('light.power', currentPower + value);
		this.attr('light').save();
	},
	increment: function() {
		this.changePower(10);
	},
	decrement: function() {
		this.changePower(-10);
	}

});

export default VM;
