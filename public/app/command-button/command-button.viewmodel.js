import Map from 'can/map/';
import 'can/map/define/';

import {Demo} from 'public/models/demo';
import {Light} from 'public/models/light';

const VM = Map.extend({
	define: {
		change: {
			type: 'number',
			value: 20
		},
		params: {
			get() {
				return {
					duration: this.attr('duration'),
					change: this.attr('change') * (this.attr('inverse') ? -1 : 1),
					light: this.attr('light.id')
				};
			}
		},
		duration: {
			type: 'number',
			value: 3000
		},
		inverse: {
			type: 'boolean',
			value: false
		},
		light: {
			Type: Light
		},
		command: {
			Type: Demo
		},
		disabled: {
			type: 'boolean',
			value: false
		},
		name: {
			get() {
				let value = this.attr('change') * (this.attr('inverse') ? -1 : 1);
				let seconds = this.attr('duration') / 1000;
				return `${value} over ${seconds} seconds`;
			}
		}
	},
	addCommand (command) {
		this.attr({
			command,
			disabled: true
		});
	},
	clearCommand: function () {
		this.removeAttr('command');
		this.attr('disabled', false);
	},
	sendCommand: function () {
		var command = new Demo(this.attr('params'));
		command.save();
		this.addCommand(command);
		command.bind('timeLeft', (ev, newVal, oldVal) => {
			if(newVal === 0) {
				this.clearCommand();
			}
		});
	}

});

export default VM;
