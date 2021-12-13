import './styles/main.scss';
import React from 'react';
import { render as domRender } from 'react-dom';
import { App } from './components';
// import { settings, getRandomMinMax } from './utils';

domRender(
  <App greetingMessage={'hello React!'} />,
  document.getElementById('root')
);
