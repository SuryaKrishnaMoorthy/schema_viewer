import React, { Component } from "react";
import {
  Navbar,
  NavbarBrand,
  Nav,
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
  DropdownToggle,
  Collapse,
  NavbarToggler
} from "reactstrap";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import SearchBar from "./SearchBar";
import RedocDisplay from "./Main";

export default class NavBar extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }

  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  render() {
    return (
      <Navbar color="light" light expand="md" sticky="top">
        <NavbarBrand href="/">reactstrap</NavbarBrand>
        <NavbarToggler onClick={this.toggle} />
        <Collapse style={{ height: "100%" }} isOpen={this.state.isOpen} navbar>
          <Nav className="ml-auto" navbar>
            <UncontrolledDropdown
              style={{ backgroundColor: "#39809E" }}
              nav
              inNavbar
            >
              <DropdownToggle nav caret>
                Options
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem
                  tag="a"
                  href="https://api.apis.guru/v2/specs/instagram.com/1.0.0/swagger.yaml"
                >
                  Instagram
                </DropdownItem>
                <DropdownItem
                  tag="a"
                  href="https://rebilly.github.io/ReDoc/swagger.yaml"
                >
                  PetStore
                </DropdownItem>
                <DropdownItem
                  tag="a"
                  href="https://api.apis.guru/v2/specs/googleapis.com/calendar/v3/swagger.yaml"
                >
                  Google Calendar
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
            <SearchBar />
          </Nav>
        </Collapse>
      </Navbar>
    );
  }
}
