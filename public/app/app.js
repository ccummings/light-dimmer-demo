import Component from 'can/component/';
import template from './app.stache!';
import AppState from './appState';

const App = Component.extend({
	tag: 'light-dimmer-app',
	template,
	viewModel: AppState
});

export default App;
