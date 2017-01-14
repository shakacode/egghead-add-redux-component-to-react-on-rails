import ReactOnRails from 'react-on-rails';

import HelloWorldApp from './HelloWorldApp';
import MessageApp from './MessageApp';

// This is how react_on_rails can see the HelloWorld in the browser.
ReactOnRails.register({
  HelloWorldApp,
  MessageApp,
});
