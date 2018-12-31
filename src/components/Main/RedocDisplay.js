import React, { Component } from "react";
import { RedocStandalone } from "redoc";
import { connect } from "react-redux";
import { Voyager } from "graphql-voyager";
import fetch from "isomorphic-fetch";

class RedocDisplay extends Component {
  render() {
    function introspectionProvider(query) {
      return fetch(window.location.origin + "/graphql", {
        method: "post",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ query: query })
      }).then(response => {
        return response.json();
      });
    }
    return (
      <div>
        <RedocStandalone
          specUrl={this.props.schemaUrl}
          options={{
            nativeScrollbars: true,
            theme: { colors: { main: "#dd5522" } }
          }}
        />
        {/* <Voyager
          workerURI={process.env.PUBLIC_URL + "/voyager.worker.js"}
          introspection={introspectionProvider}
        /> */}
      </div>
    );
  }
}

const mapStateToProps = state => state;

export default connect(
  mapStateToProps,
  null
)(RedocDisplay);
