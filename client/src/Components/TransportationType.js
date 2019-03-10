import React, { Component } from 'react';
import { Button, Card } from 'reactstrap'
import './TransportationType.css';

class TransportationType extends Component {
  constructor(props) {
    super(props)
    this.state = {
      value: null,
      selected: false,
    }
  }

  transportationTypeSelected() {
    this.props.commute.typeID = this.props.value.id
    this.props.commute.typeValue = this.props.value.value
    this.props.commuteTypeSelected(this.props.commute)
  }

  render() {
    return (
      <Card>
        <Button outline color="primary" className="transportation-button" onClick={() => this.transportationTypeSelected()}>{this.props.value.value}</Button>        
      </Card>
    );
  }
}

export default TransportationType;
