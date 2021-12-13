import React from 'react';
import { ReactLogo } from '../../components';

export default function App({ greetingMessage }) {
  return (
    <div className="app">
      <ReactLogo />
      <ReactLogo title="React UI Library" />
      <h1>{greetingMessage}</h1>
    </div>
  );
}
