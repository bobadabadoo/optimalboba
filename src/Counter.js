import React, { Component } from 'react';
import './Counter.css';

class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: this.props.startCounter,
      displayCounter: this.props.startCounter,
    };
  }

  getRandomArbitrary(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
  }

  componentDidMount() {
    this.interval = setInterval(() => {
      const newCounter = this.state.counter + 1;
      this.setState({ counter: newCounter, displayCounter: newCounter });
    }, this.getRandomArbitrary(4000,10000));
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.displayCounter !== this.state.displayCounter) {
      this.animateCounter();
    }
  }

  animateCounter = () => {
    this.counterRef.classList.add('Counter--flap');
    setTimeout(() => {
      this.counterRef.classList.remove('Counter--flap');
    }, 500);
  };

  numberWithCommas = (number) => {
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }

  render() {
    const { displayCounter } = this.state;
    const counterString = this.numberWithCommas(displayCounter);

    return (
      <div className="Counter" ref={(el) => (this.counterRef = el)}>
        {counterString.split('').map((digit, i) => (
          <div key={i} className="Counter__digit-box">
            <div className="Counter__digit-flipper">
              <span className="Counter__digit Counter__digit--front">{digit}</span>
              <span className="Counter__digit Counter__digit--back">{digit}</span>
            </div>
          </div>
        ))}
      </div>
    );
  }
}

export default Counter;
