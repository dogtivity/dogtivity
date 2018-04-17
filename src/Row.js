import React, { Component } from 'react';

class Row extends Component {
  render() {
    return (
      <div className="container-wrapper">
        <div className="container">
          {this.props.children}
        </div>
      </div>
    );
  }
}

export default Row;
