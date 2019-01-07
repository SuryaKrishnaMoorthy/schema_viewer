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

import "./style.css";
import SearchBar from "./SearchBar";
import { changeSchema, getAllSchema } from "../../actions";
const logo = require("../../assets/seattle-childrens-logo-header.png");

class NavBar extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false,
      selectedDropDown: "Select a Schema"
    };
  }

  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  handleClick = e => {
    this.props.changeSchema(e.currentTarget.getAttribute("value"));
    this.setState({
      selectedDropDown: e.currentTarget.getAttribute("name")
    });
  };

  componentDidMount() {
    this.props.getAllSchema();
  }

  render() {
    return (
      <Navbar className="navBar" color="light" light expand="md" sticky="top">
        <NavbarBrand href="/">
          <img
            alt="Seattle Children's logo"
            height="50px"
            width="250px"
            src={logo}
          />
        </NavbarBrand>
        <NavbarToggler onClick={this.toggle} />
        <Collapse style={{ height: "100%" }} isOpen={this.state.isOpen} navbar>
          <Nav
            className="mx-auto navBarComponents justify-content-around"
            navbar
          >
            <SearchBar className="searchBar" />
            <UncontrolledDropdown
              className="navBarDropdown rounded ml-4"
              nav
              inNavbar
            >
              <DropdownToggle
                style={{ float: "right" }}
                className="text-white"
                nav
                caret
              >
                {/* Select a Schema */}
                {this.state.selectedDropDown}
              </DropdownToggle>
              <DropdownMenu right>
                {this.props.schemas.length
                  ? this.props.schemas.map((schema, i) => (
                      <DropdownItem
                        onClick={e => this.handleClick(e)}
                        tag="a"
                        name={schema.name}
                        // eslint-disable-next-line
                    key={i}
                        value={schema.url}
                      >
                        {schema.name}
                      </DropdownItem>
                    ))
                  : []}
              </DropdownMenu>
            </UncontrolledDropdown>
          </Nav>
        </Collapse>
      </Navbar>
    );
  }
}

const mapStateToProps = ({ schemaUrl, schemas }) => {
  return { schemaUrl, schemas };
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators({ changeSchema, getAllSchema }, dispatch);
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NavBar);
