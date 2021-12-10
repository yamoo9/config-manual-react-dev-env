import './RandomCountUp.css';
import React from 'react';

export class RandomCountUpClass extends React.Component {
  constructor(props) {
    super(props);
  }

  getCompleteStyle() {
    return !this.props.isComplete
      ? null
      : {
          animationName: 'none',
        };
  }

  render() {
    return (
      <div className="randomCountUp" data-testid="container">
        <output style={this.getCompleteStyle()}>{this.props.count}</output>
      </div>
    );
  }
}

export const RandomCountUp = ({ count, isComplete }) => {
  const completeStyle = !isComplete
    ? null
    : {
        animationName: 'none',
      };

  return (
    <div className="randomCountUp" data-testid="container">
      <output style={completeStyle}>{count}</output>
    </div>
  );
};
