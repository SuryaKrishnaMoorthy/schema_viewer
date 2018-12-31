import React, { Component } from "react";
import { InputGroup, InputGroupAddon, Button, Input } from "reactstrap";

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      search: ""
    };
  }

  onChange = e => {
    this.setState({
      search: e.target.value
    });
  };

  render() {
    return (
      <div>
        <InputGroup>
          <Input
            type="search"
            name="search"
            placeholder="Search a schema"
            onChange={this.onChange}
          />
          <InputGroupAddon addonType="append">
            <Button color="secondary">Search!</Button>
          </InputGroupAddon>
        </InputGroup>
      </div>
    );
  }
}

export default SearchBar;
