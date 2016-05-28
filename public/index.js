import $ from 'jquery';
import stache from 'can/view/stache/';
import 'public/app/';

$('#application').html(stache('<light-dimmer-app></light-dimmer-app>')());
