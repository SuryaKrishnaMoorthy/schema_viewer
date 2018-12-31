import React, { Component } from "react";
import { RedocStandalone } from "redoc";
import { connect } from "react-redux";

class RedocDisplay extends Component {
  render() {
    return (
      <RedocStandalone
        specUrl={this.props.schemaUrl}
        options={{
          nativeScrollbars: true,
          theme: { colors: { main: "#dd5522" } }
        }}
      />
    );
  }
}

const mapStateToProps = state => state;

export default connect(
  mapStateToProps,
  null
)(RedocDisplay);
