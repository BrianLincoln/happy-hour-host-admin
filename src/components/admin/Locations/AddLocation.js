import React, { Component } from 'react';
import './AddLocation.scss';

export class AddLocation extends Component {
  constructor(props) {
    super(props);

    this.toggleAddLocationForm = this.toggleAddLocationForm.bind(this);
    this.handleFieldChange = this.handleFieldChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

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
  toggleAddLocationForm() {
    this.setState({showAddLocationForm: !this.state.showAddLocationForm});
  }
  handleFieldChange(event) {
    switch (event.target.id) {
      case "location-name":
        this.setState({name: event.target.value});
        break;
      case "latitude":
        this.setState({positionLatitude: event.target.value});
        break;
      case "longitude":
        this.setState({positionLongitude: event.target.value});
        break;
      case "street-address":
        this.setState({addressStreet: event.target.value});
        break;
      case "address-city":
        this.setState({addressCity: event.target.value});
        break;
      case "address-state":
        this.setState({addressState: event.target.value});
        break;
      case "address-zip":
        this.setState({addressZip: event.target.value});
        break;
    }
  }
  handleSubmit(event) {
    event.preventDefault();
    this.props.handleSubmitNewLocation(this.state, this.props.cityId);
    this.toggleAddLocationForm();
  }
  render() {
    if (this.state.showAddLocationForm) {
      return (
        <div className="add-location-wrapper">
          <button onClick={this.toggleAddLocationForm} className="button_sm button_dark admin-add-location-action">x hide</button>
          <form className="space-top-sm space-bottom-sm" onSubmit={this.handleSubmit}>  

            <div className="form-element">
              <label className="font-title-sm form-label" htmlFor="location-name">name: </label>
              <input required type="text" id="location-name" value={this.state.name} onChange={this.handleFieldChange} />
            </div>
            <div className="form-element">
              <label className="font-title-sm form-label" htmlFor="latitude">latitude: </label>
              <input required type="text" id="latitude" value={this.state.positionLatitude} onChange={this.handleFieldChange} />
            </div>
            <div className="form-element">               
              <label className="font-title-sm form-label" htmlFor="longitude">longitude: </label>
              <input required type="text" id="longitude" value={this.state.positionLongitude} onChange={this.handleFieldChange} />
            </div>
            <div className="form-element">            
              <label className="font-title-sm form-label" htmlFor="street-address">street address: </label>
              <input required type="text" id="street-address" value={this.state.addressStreet} onChange={this.handleFieldChange} />
            </div>
            <div className="form-element">
              <label className="font-title-sm form-label" htmlFor="address-city">city: </label>
              <input required type="text" id="address-city" value={this.state.addressCity} onChange={this.handleFieldChange} />
            </div>
            <div className="form-element">
              <label className="font-title-sm form-label" htmlFor="address-state">state: </label>
              <input required type="text" id="address-state" value={this.state.addressState} onChange={this.handleFieldChange} />
            </div>
            <div className="form-element">              
              <label className="font-title-sm form-label" htmlFor="address-zip">zip: </label>
              <input required type="text" id="address-zip" value={this.state.addressZip} onChange={this.handleFieldChange} />
            </div>                                                                       

            <input className="button_sm button_accent" type="submit" value="Submit" />
          </form>
        </div>
      );
    } else {
      return <button onClick={this.toggleAddLocationForm} className="button_sm button_dark admin-add-location-action">+ add location</button>
    }
  }
}

export default AddLocation;