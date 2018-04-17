import React, { Component } from 'react';

import Row from './Row';
import Cell from './Cell';

class Header extends Component {
  render() {
    return (
      <header>
        <Row>
          <Cell>
            <h1>Dogtivity</h1>
            <p>Bork what a nice floof doggo vvv, super chub.</p>
          </Cell>
        </Row>
      </header>
    );
  }
}

export default Header;
