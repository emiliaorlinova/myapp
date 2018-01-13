import React, { Component } from 'react';

const styles = {
  btn: {
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

class Button extends Component {
  render() {
    let { label, onPress, isVisible } = this.props;
    const btnStyles = isVisible ? styles.visible : styles.hidden;
    return (
      <button onClick={onPress} style={btnStyles}>
        {label}
      </button>
    );
  }
}

export default Button;
