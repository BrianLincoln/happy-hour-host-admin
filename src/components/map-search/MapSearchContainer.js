import React, { Component } from 'react';
import MapContainer from './map/MapContainer';
import ResultsList from './text-results/ResultsList';
import locationApi from './../../utils/LocationApi';
import './MapSearch.scss';
import _ from 'lodash';

export class MapSearchContainer extends Component {
  constructor(props) {
    super(props);
    this.setResults = this.setResults.bind(this);
    this.onMapUpdate = this.onMapUpdate.bind(this);

    this.state = {
      results: [],
      updateCount: 0
    }
  }  
  setResults(results) {
    this.setState({results: results, updateCount: this.state.updateCount + 1});    
  } 
  onMapUpdate(bounds) {
    console.log("mapUpdate");
    locationApi.getLocations(bounds).then((results) => {
      this.setResults(results);
    });
  } 
  render() {
    return (
        <div className="map-search-container">
          <MapContainer results={this.state.results} onMapUpdate={this.onMapUpdate} google={this.props.googleMapsApiKey} />
          <ResultsList results={this.state.results} />
      </div>
    )
  }
}

export default MapSearchContainer;