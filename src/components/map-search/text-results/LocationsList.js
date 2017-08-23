import React, { Component } from 'react';
import Result from './Result';
import Filter from './../filter/Filter';
import './LocationsList.scss';

class LocationsList extends Component {
  render() { 
    let locations = (
      <div className="card">
        <h2>No Results</h2>
        <p>Try zooming out or removing filters</p>
      </div>
    );  

    if (this.props.selectedLocation) {
      locations = <Result key={this.props.selectedLocation._id} {...this.props.selectedLocation} /> 
    } else if (this.props.locations.length > 0) {
      locations = this.props.locations.map((location) => {
        return <Result key={location._id} {...location} /> 
      });  
    }
   
    return (
      <div className="location-list-wrapper">        
        <ul className="location-list">
          {locations}
        </ul>
      </div>
    );
  }
}

export default LocationsList;