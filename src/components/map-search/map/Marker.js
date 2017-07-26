import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Marker extends Component {
  componentDidUpdate(prevProps) {
    this.renderMarker();    
  }  
  componentWillUnmount() {
    if (this.marker) {
      this.marker.setMap(null);
    }
  }  
  renderMarker() {
    let {
      map, google, position, mapCenter
    } = this.props;

    let pos = position || mapCenter;
    position = new google.maps.LatLng(pos.lat, pos.lng);

    const pref = {
      map: map,
      position: position
    };
    this.marker = new google.maps.Marker(pref);
  }
  render() {
    this.renderMarker();
    return null;
  }  
}

export default Marker;

Marker.propTypes = {
  position: PropTypes.object,
  map: PropTypes.object
}