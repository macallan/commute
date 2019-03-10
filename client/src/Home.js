import React, { Component } from 'react';
// import logo from './logo.svg';
import TransportationType from './Components/TransportationType'
import CommuteNavBar from './Components/CommuteNavBar'
import './Home.css';
import 'bootstrap/dist/css/bootstrap.min.css';

class Home extends Component {
  state = {
    transportationTypes: [],
    commute: {
      typeID: null,
      typeValue: null,
      distance: null,
      user: null
    }
  }

  componentDidMount() {
    fetch('/transportation-types')
      .then(response => response.json())
      .then(transportationTypes => this.setState({ transportationTypes }));
  }

  commuteTypeSelected = (commute) => {
    this.setState({ 
      commute
    })
  }

  render() {
    return (
      <div className="Home">
        <CommuteNavBar/>
        <div>{this.state.commute.typeValue}</div>
        <div className="transportation-list">
        {
          this.getTransportationTypes().map(t => (
            <TransportationType className="space-evenly" value={t} commute={this.state.commute} commuteTypeSelected={this.commuteTypeSelected}/>
          ))
        }
        </div>
      </div>
    );
  }

  getTransportationTypes() {
    return this.state.transportationTypes
  }
}

export default Home;
