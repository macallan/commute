import React, { Component } from 'react';
import Select from 'react-select'
import 'bootstrap/dist/css/bootstrap.min.css';


import TransportationType from './Components/TransportationType'
import CommuteNavBar from './Components/CommuteNavBar'
import './Home.css';

class Home extends Component {
  state = {
    transportationTypes: [],
    commute: {
      typeID: null,
      typeValue: null,
      distance: null,
      user: null
    },
    users : []
  }

  componentDidMount() {
    fetch('/transportation-types')
      .then(response => response.json())
      .then(transportationTypes => this.setState({ transportationTypes }));
    fetch('/user/all')
      .then(response => response.json())
      .then(users => {
        this.setState({ 
          users: users.map(t => {
            return {label: t.name, value: t.id}
          })
        })
        console.log(this.state.users)
      });
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
        <Select options={this.state.users}/>
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
