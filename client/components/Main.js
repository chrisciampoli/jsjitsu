import React from 'react';
import { Nav, Navbar, NavDropdown, MenuItem, NavItem } from 'react-bootstrap';
import { Link } from 'react-router';

const Main = React.createClass({
  render() {
      const { auth } = this.props.route;
      const navbarInstance = (
          <Navbar>
              <Navbar.Header>
                  <Navbar.Brand>
                      <a href="#">JsJitsu</a>
                  </Navbar.Brand>
              </Navbar.Header>
              <Nav>
                  <NavItem eventKey={1} onClick={auth.login.bind(this)}>Login</NavItem>
                  <NavItem eventKey={2} href="#">Link</NavItem>
                  <NavDropdown eventKey={3} title="Dropdown" id="basic-nav-dropdown">
                      <MenuItem eventKey={3.1}>Action</MenuItem>
                      <MenuItem eventKey={3.2}>Another action</MenuItem>
                      <MenuItem eventKey={3.3}>Something else here</MenuItem>
                      <MenuItem divider />
                      <MenuItem eventKey={3.3}>Separated link</MenuItem>
                  </NavDropdown>
              </Nav>
          </Navbar>
      );

    return (
      <div>
          {navbarInstance}
        <h1>
          <Link className="no-hover" to="/">JsJitsu - Javascript Skills</Link>
        </h1>
        {React.cloneElement(this.props.children, { ...this.props, key: undefined, ref: undefined })}
      </div>
    )
  }
});

export default Main;
