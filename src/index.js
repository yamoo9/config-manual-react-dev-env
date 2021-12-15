import '@/styles/main.scss';
import React from 'react';
import { render } from 'react-dom';
import App from '@/components';

render(
  <App greetingMessage={'hello React!'} />,
  document.getElementById('root')
);
