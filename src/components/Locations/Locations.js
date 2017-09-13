import React, { Component } from 'react';
import './Locations.scss';
import SelectCity from './SelectCity';
import AddLocation from './AddLocation';
import Location from './Location';
import locationApi from './../../utils/LocationApi';

export class Locations extends Component {
    constructor(props) {
        super(props);
        this.handleCitySelect = this.handleCitySelect.bind(this);
        this.handleSubmitNewLocation = this.handleSubmitNewLocation.bind(this);
        this.getLocationsByCity = this.getLocationsByCity.bind(this);
        this.updateLocations = this.updateLocations.bind(this);

        this.state = {
            cityId: null,
            locations: []
        };
    }    
    handleCitySelect(cityId) {
        this.setState({cityId: cityId});
        this.getLocationsByCity(cityId);
    }
    handleSubmitNewLocation(location, cityId) {
        locationApi.postLocation(location, cityId).then((results) => {
            this.getLocationsByCity(cityId);
        });        
    }
    getLocationsByCity(cityId) {
        if (cityId) {
            locationApi.getLocationsByCity(cityId).then((locations) => {
                this.setState({locations: locations});
            });
        } else {
            this.setState({locations: []});
        }
    }
    updateLocations() {
        if (this.state.cityId) {
            this.getLocationsByCity(this.state.cityId);
        }
    }
    render() {
        const locations = !this.state.locations ? null : this.state.locations.map((location) => {
            return (<Location key={location._id} location={location}  updateLocations={this.updateLocations} /> );
        });

        if (this.state.cityId) {
            return (
                <div className="card">
                    <h1>Locations</h1>
                    <SelectCity {...this.props} handleCitySelect={this.handleCitySelect} />
                    {this.state.cityId ? <AddLocation {...this.props} cityId={this.state.cityId} handleSubmitNewLocation={this.handleSubmitNewLocation} /> : null}
                    <div className="list-group admin-location-list">
                        {locations}
                    </div>                
                </div>
            )
        } else {
            return (
                <div className="card">
                    <h1>Select a city</h1>
                    {this.props.cities ? <SelectCity {...this.props} handleCitySelect={this.handleCitySelect} /> : null}
                </div>
            );
        }


    }
}

export default Locations;