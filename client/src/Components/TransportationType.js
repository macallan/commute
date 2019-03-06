import React, { Component } from 'react';
import './TransportationType.css';

class TransportationType extends Component {
  constructor(props) {
    super(props)
    this.state = {
      value: null,
    }
  }

  transportationTypeSelected() {
    this.props.commute.typeID = this.props.value.id
    this.props.commute.typeValue = this.props.value.value
    this.props.commuteTypeSelected(this.props.commute)
  }

  render() {
    return (
      <li className="transportation-type">
        <div className="transportation-type">
          <button onClick={() => this.transportationTypeSelected()}>{this.props.value.value}</button>
        </div>
      </li>
    );
  }
}

export default TransportationType;
