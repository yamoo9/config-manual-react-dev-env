import React from 'react';
import reactLogoPath from '../../assets/react.svg';
import manImagePath from '../../assets/man.png';

export default function App({ greetingMessage }) {
  return (
    <div className="app">
      <img src={reactLogoPath} alt="React" />
      <img src={manImagePath} alt="Photographer" />
      <h1>{greetingMessage}</h1>
    </div>
  );
}
