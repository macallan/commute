import React, { Component } from 'react';
// import logo from './logo.svg';
import TransportationType from './Components/TransportationType'
import './App.css';

class App extends Component {
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
      <div className="App">
        <div>Commute Fun</div>
        <div>{this.state.commute.typeValue}</div>
        <ul className= "transportation-list">
        {
          this.getTransportationTypes().map(t => (
            <TransportationType value={t} commute={this.state.commute} commuteTypeSelected={this.commuteTypeSelected}/>
          ))
        }
        </ul>
      </div>
    );
  }

  getTransportationTypes() {
    return this.state.transportationTypes
  }
}

export default App;
