import React, { Component } from 'react';
import Map from 'google-maps-react';

class SampleMap extends Component {
  render() {
    return (
      <Map google={this.props.google} zoom={14}></Map>
    )
  }
}

export default SampleMap;