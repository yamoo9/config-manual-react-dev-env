/* eslint-disable */
import React from 'react';
import reactLogoPath, { ReactComponent as ReactLogo } from '@/assets/react.svg';
import { RandomCountUp } from '@/components';

export default function App({ greetingMessage }) {
  return (
    <div className="app">
      <RandomCountUp count={9} isComplete />
    </div>
  );
}
