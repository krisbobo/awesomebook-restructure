import dateTime from './modules/date.js';
import eventHandler from './modules/userinterface.js';
import Navigation from './modules/navigation.js';

dateTime();

const navigation = new Navigation();
navigation.view();
eventHandler();