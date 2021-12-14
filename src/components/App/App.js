import React from 'react';
// import reactLogoPath, { ReactComponent as ReactLogo, } from '../../assets/react.svg';
import ReactLogo from '../../assets/react.svg?react';
import reactLogoPath from '../../assets/react.svg';

export default function App({ greetingMessage }) {
  return (
    <div className="app">
      <img src={reactLogoPath} alt="리엑트" />
      <ReactLogo title="React UI Library" />
      <h1>{greetingMessage}</h1>
    </div>
  );
}
