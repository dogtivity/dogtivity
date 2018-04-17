import React, { Component } from 'react';

import Row from './Row';
import Cell from './Cell';

import DeviceReminder from './device/Reminder';

class Reminder extends Component {
  render() {
    return (
      <section>
        <Row>
          <Cell>
            <h2>Wow very biscit shibe</h2>
            <p>Waggy wags blop heck bork most angery pupper I have ever seen, adorable doggo doggo. Pats snoot puggo such treat tungg, maximum borkdrive aqua doggo. Shooberino pats puggo the neighborhood pupper much ruin diet, the neighborhood pupper yapper noodle horse.</p>
            <p>Shoob pupper long bois the neighborhood pupper smol, doing me a frighten many pats long doggo. Shibe he made many woofs woofer super chub ruff pupper, long doggo doggorino the neighborhood pupper thicc long doggo, shibe bork heckin angery woofer pats.</p>
          </Cell>
          <Cell>
            <DeviceReminder />
          </Cell>
        </Row>
      </section>
    );
  }
}

export default Reminder;
