import React from 'react';
import { render } from 'react-dom';
import { App } from './components';

render(
  <App greetingMessage="안녕! React 😃" />,
  document.getElementById('root')
);
