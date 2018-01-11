import React, { Component } from 'react';

const styles = {
  btn: {
    display: 'inline-block',
    position: 'relative',
    color: '#fff',
    fontSize: 18,
    cursor: 'pointer',
    textAlign: 'center',
  },
};

class Button extends Component {
  render() {
    let { style, label } = this.props;

    return (
      <button onClick={this.props.onPress} style={{ ...styles.btn, ...style }}>
        {label}
      </button>
    );
  }
}

export default Button;
