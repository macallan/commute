import React, { Component } from 'react'
import Home from './Home'
import SignUp from './SignUp'
import {BrowserRouter, Route} from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Route exact={true} path='/' render={() => (
            <div className="App">
              <Home />
            </div>
          )}/>

          <Route exact={true} path='/sign-up' render={() => (
            <div className="App">
              <SignUp />
            </div>
          )}/>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
