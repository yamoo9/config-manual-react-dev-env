import React from 'react';
import { render as domRender } from 'react-dom';
import { RandomCountUpApp } from './components';
import { settings, getRandomMinMax } from './utils';

let count = 0;
const MIN = 30;
const MAX = 76;
const TARGET = getRandomMinMax(MIN, MAX);
const rootNode = document.getElementById('root');

settings.setDocumentTitle(`(${TARGET}) 랜덤 카운트 업 앱! (with React ⚛)`);
settings.clickDocumentReloadBrowser();

function render(count, isComplete) {
  domRender(
    <RandomCountUpApp count={count} isComplete={isComplete} />,
    rootNode
  );
}

function animate() {
  count += 1;
  let isComplete = count >= TARGET;
  render(count, isComplete);
  if (!isComplete) {
    // 재귀 호출
    window.requestAnimationFrame(animate);
  }
}

animate();
