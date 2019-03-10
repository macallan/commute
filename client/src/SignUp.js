import React, { Component } from 'react'
import CommuteNavBar from './Components/CommuteNavBar'
import { Button, Form, FormFeedback, FormGroup, Label, Input} from 'reactstrap'
import { Redirect } from 'react-router-dom'

class SignUp extends Component {
  state = {
    toHome: false,
    nameTaken: false,
    name: '',
    distance: ''
  }

  handleSubmit() {
    console.log("Submit button pressed")
  }

  setName(e) {
    this.setState({
      name: e.target.value
    })
  }

  setDistance(e) {
    this.setState({
      distance: e.target.value
    })
  }

  submitForm(e) {
    e.preventDefault();
    fetch('/user/new', {
      method: 'POST',
      headers:{
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name: this.state.name,
        distance: this.state.distance,
      })
    }).then(response =>  {
      if (response.ok) {
        this.setState({ 
          toHome: true
        })
      } else if (response.status === 422) {
        this.setState({ 
          nameTaken: true
        })
      }
    }).catch(function(err) {
      console.log("Error")
    })
  }

  render() {
    if (this.state.toHome === true) {
      return <Redirect to='/' />
    }
    return (
      <div className="SignUp">
        <CommuteNavBar/>
        <Form onSubmit={ (e) => this.submitForm(e) }>
          <FormGroup>
            <Label for="name">Name</Label>
            <Input type="name" name="name" id="name" placeholder="Bailey Biker" value={ this.state.name } onChange={ (e) => this.setName(e) } invalid={this.state.nameTaken}></Input>
            <FormFeedback>That name is already taken, please use a different one.</FormFeedback>
          </FormGroup>
          <FormGroup>
            <Label for="distance">Commute Distance in Miles</Label>
            <Input type="decimal" id="distance" placeholder="1.2" value={ this.state.distance } onChange={ (e) => this.setDistance(e) }></Input>
          </FormGroup>
          <Button>Submit</Button>
        </Form>
      </div>
    )
  }
}

export default SignUp
