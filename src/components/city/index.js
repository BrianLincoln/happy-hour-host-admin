import React, { Component } from 'react';
import MapSearchContainer from './../map-search/MapSearchContainer';
import MapLinkWrapper from './../map-links/MapLinkWrapper';

export class City extends Component {
  render() {
    return (
        <div>
          <MapSearchContainer google={this.props.config.googleMapsApiKey} /> 
          <section className="container space-top-lg space-bottom-lg">  
            <div className="row">
              <div className="col-xs-12 col-md-8 col-md-offset-2">
                <h1>Happy hours in {this.props.city}</h1>
                <p>Find the best happy hours in {this.props.city}. We are working to build the best list of happy hours, drink and food specials in {this.props.city}. Help us out by [SUBMITTING] your favorite local happy hours. Filter by time to find the best happy hours right now or later tonight. Find the best food and drink specials in {this.props.city}.</p>
                <h2>City: {this.props.city}</h2>
                <h2>Area: {this.props.area}</h2>
              </div>
            </div>
          </section>          
      </div>
    )
  }
}

export default City;