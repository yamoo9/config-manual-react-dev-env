// import './RandomCountUp.css';
import React from 'react';

export const RandomCountUp = ({ count, isComplete }) => {
  const completeStyle = !isComplete
    ? null
    : {
        animationName: 'none',
      };

  return (
    <div className="randomCountUp">
      <output style={completeStyle}>{count}</output>
    </div>
  );
};
