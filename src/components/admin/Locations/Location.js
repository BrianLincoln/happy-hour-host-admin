import React, { Component } from 'react';
import './Location.scss';
import LocationDetails from './LocationDetails';

export class Location extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);

    this.state =  {
      showLocationDetails: false
    }
  }
  handleClick(event) {
    this.setState({showLocationDetails: !this.state.showLocationDetails});
  }
  render() {
    const showHideText = this.state.showLocationDetails ? "x" : "+";

    return (
      <div className="list-item admin-location">
        <div onClick={this.handleClick} className="row">
          <div className="col-xs-12 col-sm-8">
            <h2 className="font-title-md admin-location-name">{this.props.location.name}</h2>      
          </div>
          <div className="col-xs-12 col-sm-4 font-title-md admin-location-toggle">{showHideText}</div>
        </div>
        {this.state.showLocationDetails ? <LocationDetails updateLocations={this.props.updateLocations} {...this.props.location} /> : null} 
      </div>
    )
  }
}

export default Location;