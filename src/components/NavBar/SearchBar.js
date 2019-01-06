import React, { Component, Fragment } from "react";
import { Typeahead } from "react-bootstrap-typeahead";
import "react-bootstrap-typeahead/css/Typeahead.css";
import { FormGroup, InputGroupAddon, InputGroup, Button } from "reactstrap";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import { changeSchema, getAllSchema } from "../../actions";

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      paginate: true
    };
  }

  range = n => {
    let array = [];
    for (let i = 0; i < n; i++) {
      array.push(i);
    }
    return array;
  };

  handleChange = e => {
    if (e && e[0]) {
      this.props.changeSchema(e[0].url);
    }
  };

  handleFocus = e => {
    e.target.select();
  };

  componentDidMount() {
    this.props.getAllSchema();
  }

  render() {
    const { paginate } = this.state;
    const options = this.props.schemas.map(schema => schema);
    return (
      <Fragment>
        <FormGroup>
          <InputGroup>
            <Typeahead
              onPaginate={e => console.log("Results paginated")}
              maxResults={5}
              paginationText="View more schemas"
              options={options}
              labelKey="name"
              renderMenuItemChildren={option => (
                <div>
                  {option.name}
                  <div>
                    <small>{option.url}</small>
                  </div>
                </div>
              )}
              paginate={paginate}
              placeholder="Search using keyword"
              onChange={this.handleChange}
              onFocus={this.handleFocus}
            />
          </InputGroup>
        </FormGroup>
      </Fragment>
    );
  }
}

const mapStateToProps = ({ schemaUrl, schemas }) => {
  return { schemas };
};

const mapDispatchToprops = dispatch => {
  return bindActionCreators({ changeSchema, getAllSchema }, dispatch);
};

export default connect(
  mapStateToProps,
  mapDispatchToprops
)(SearchBar);
