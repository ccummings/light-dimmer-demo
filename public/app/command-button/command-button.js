import Component from 'can/component/';
import template from './command-button.stache!';
import viewModel from './command-button.viewmodel';

const CommandButton = Component.extend({
	tag: 'command-button',
	template,
  viewModel,
	helpers: {
		mstoSeconds: function(value) {
			return value() / 1000;
		}
	}
});

export default CommandButton;
