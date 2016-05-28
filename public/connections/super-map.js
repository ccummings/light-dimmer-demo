import connect from 'can-connect';
import $ from 'jquery';
import 'can-connect/can/super-map/';

const superMap = function(newBehaviors, options) {
	if(arguments.length === 1) {
		options = newBehaviors;
	}

	const behaviors = [
		'constructor',
		'can-map',
		'constructor-store',
		'data-parse',
		'data-url',
		'real-time',
		'constructor-callbacks-once'];

	options.ajax = $.ajax;

	if(arguments.length === 2) {
		[].push.apply(behaviors, newBehaviors);
	}

	return connect(behaviors, options);
};

export default superMap;
