import React, { Component } from 'react';

class Row extends Component {
  render() {
    return (
      <div className="container-inner">
        {this.props.children}
      </div>
    );
  }
}

export default Row;
