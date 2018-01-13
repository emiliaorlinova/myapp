import React, { Component } from 'react';
import DogImage from './1.jpg';
import DogCucumber from './2.jpg';

const styles = {
  dog: {
    display: 'inline-block',
    position: 'relative',
    color: '#fff',
    fontSize: 18,
    cursor: 'pointer',
    textAlign: 'center',
    padding: 10,
    backgroundColor: '#e06064',
    outline: 'none',
  },
  visible: {
    display: 'inline-block',
    position: 'relative',
    color: '#fff',
    fontSize: 18,
    cursor: 'pointer',
    textAlign: 'center',
    padding: 10,
    backgroundColor: '#e06064',
    outline: 'none',
    opacity: '1',
    visibility: 'visible',
    transition: 'opacity .5s ease, visibility .5s ease',
  },
  hidden: {
    display: 'none',
    opacity: '0',
    visibility: 'hidden',
  },
};

class Dog extends Component {
  render() {
    const { hasEaten } = this.props;
    const image = hasEaten ? DogCucumber : DogImage;
    return <img src={image} />;
  }
}

export default Dog;
