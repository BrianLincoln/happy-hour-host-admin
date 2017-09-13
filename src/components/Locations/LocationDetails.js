import React, { Component } from 'react';
import Specials from './Specials';

export class LocationDetails extends Component {
  constructor(props) {
    super(props);

    this.state =  {
      name: '',
      positionLatitude: '',
      positionLongitude: '',      
      addressStreet: '',
      addressCity: '',
      addressState: '',
      addressZip: '',
      neighborhoods: [],
      showAddLocationForm: false
    }
  }    

  render() {
    return (
      <div>
        <div className="location-details-address">
          <div>{this.props.address.streetAddress}</div>
          <div>{this.props.address.city}, {this.props.address.state} {this.props.address.zip}</div>
        </div>
        <div>{this.props.position.latitude}, {this.props.position.longitude}</div>
        <Specials locationId={this.props._id} specials={this.props.specials}  updateLocations={this.props.updateLocations} />
      </div>
    )
  }
}

export default LocationDetails;