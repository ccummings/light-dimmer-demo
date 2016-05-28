import Component from 'can/component/';
import template from './light-dimmer.stache!';
import viewModel from './light-dimmer.viewmodel';

const LightDimmer = Component.extend({
	tag: 'light-dimmer',
	template,
  viewModel
});

export default LightDimmer;
