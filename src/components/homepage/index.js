import React, { Component } from 'react';
import MapSearchContainer from './../map-search/MapSearchContainer';
import MapLinkWrapper from './../map-links/MapLinkWrapper';

export class City extends Component {
  render() {
    return (
      <div>
        <MapSearchContainer google={this.props.config.googleMapsApiKey} />
        <MapLinkWrapper />
      </div>
    )
  }
}

export default City;