import React from 'react';
import { render as domRender } from 'react-dom';
import { RandomCountUpApp } from './components';

let count = 0;

const rootNode = document.getElementById('root');

function render(count) {
  domRender(<RandomCountUpApp count={count} />, rootNode);
}

render(count);
