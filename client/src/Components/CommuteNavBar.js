import React, {Component} from 'react'
import { Navbar, NavbarBrand, Nav, NavItem, NavLink} from 'reactstrap'

class CommuteNavBar extends Component {
  render() {
    return (
      <div>
        <Navbar color="faded" light>
          <NavbarBrand href="/" className="mr-auto">Looker Commute</NavbarBrand>
          <Nav>
            <NavItem>
              <NavLink href="/sign-up">Sign Up</NavLink>
            </NavItem>
          </Nav>
        </Navbar>
      </div>
    )
  }
}

export default CommuteNavBar
