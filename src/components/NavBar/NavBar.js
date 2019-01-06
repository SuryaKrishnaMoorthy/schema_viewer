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
import { changeSchema, getAllSchema } from "../../actions";

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

  componentDidMount() {
    this.props.getAllSchema();
  }

  render() {
    return (
      <Navbar color="light" light expand="md" sticky="top">
        <NavbarBrand href="/">Seattle Children's</NavbarBrand>
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
            <SearchBar />
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
