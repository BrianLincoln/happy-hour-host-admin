import React, { Component } from 'react';
import GoogleApiComponent from './GoogleApiComponent';
import Map from './Map';
import Marker from './Marker';
import locationApi from './../../../utils/LocationApi';
import _ from 'lodash';

export class MapContainer extends Component {
  constructor(props) {
    super(props);
    this.onBoundsChange = this.onBoundsChange.bind(this);

    this.state = {
      markers: [],
      updateCount: 0
    }
  }
  onBoundsChange(map) {
    const mapBounds = map.getBounds();
    const ne = mapBounds.getNorthEast();
    const sw = mapBounds.getSouthWest();
    if (ne && sw) {
      const formattedBounds = {
        ne: ne,
        sw: sw
      }

      this.props.onMapUpdate(formattedBounds);
    }

  }
  render() {
    if (!this.props.loaded) {
      return <div className="spinner"></div>   
    }
    const markers = this.props.results.map((marker) => {
      const pos = {lat: marker.position.latitude, lng: marker.position.longitude}
      return <Marker key={marker.id} position={pos} /> 
    });
    return (
      <div className="map-container">
        <Map google={this.props.google}          
          className={'map'}
          zoom={14}
          centerAroundCurrentLocation={true}
          onBoundsChange={this.onBoundsChange}
          updateCount={this.state.updateCount}>
            {markers}
          </Map>
      </div>
    )
  }
}

export default GoogleApiComponent({
  apiKey: "AIzaSyDDbQf_9nZK-1G-P3X4dq21N1lMFedYIEs"
})(MapContainer)