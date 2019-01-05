import React, { Component } from "react";
import { RedocStandalone } from "redoc";
import { connect } from "react-redux";
import fetch from "isomorphic-fetch";

class RedocDisplay extends Component {
  render() {
    return (
      <div>
        <RedocStandalone
          specUrl={this.props.schemaUrl}
          options={{
            nativeScrollbars: true,
            theme: { colors: { main: "#dd5522" } }
          }}
        />
      </div>
    );
  }
}

const mapStateToProps = state => state;

export default connect(
  mapStateToProps,
  null
)(RedocDisplay);
