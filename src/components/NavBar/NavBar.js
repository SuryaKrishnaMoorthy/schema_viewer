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
  NavbarToggler,
  NavItem,
  NavLink
} from "reactstrap";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import SearchBar from "./SearchBar";
import listOfApis from "../../models/listOfApi";
import { changeSchema } from "../../actions";

class NavBar extends Component {
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

  handleClick = e => {
    this.props.changeSchema(e.currentTarget.getAttribute("value"));
  };

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
                {listOfApis.map((api, i) => (
                  <DropdownItem
                    onClick={e => this.handleClick(e)}
                    tag="a"
                    name={api.name}
                    // eslint-disable-next-line
                    key={i}
                    value={api.url}
                  >
                    {api.name}
                  </DropdownItem>
                ))}
              </DropdownMenu>
            </UncontrolledDropdown>
          </Nav>
        </Collapse>
      </Navbar>
    );
  }
}

const mapStateToProps = state => {
  return state;
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators({ changeSchema }, dispatch);
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NavBar);
