import React, { Component } from "react";
import { RedocStandalone } from "redoc";

class RedocDisplay extends Component {
  render() {
    return (
      <RedocStandalone
        specUrl="https://api.apis.guru/v2/specs/instagram.com/1.0.0/swagger.yaml"
        options={{
          nativeScrollbars: true,
          theme: { colors: { main: "#dd5522" } }
        }}
      />
    );
  }
}

export default RedocDisplay;
