import React, { Component } from 'react';

class LocationList extends Component {
  render() { 
    return (
      <section className="col-xs-12 col-md-6 map-link-section">
        <div className="card col-xs-12">
          <h1 className="card-heading">Best Happy Hours Near You</h1>
          <ul className="list-group">
            <li className="list-item">Uptown Minneapolis Happy Hours</li>
            <li className="list-item">Eat Street Minneapolis Happy Hours</li>
            <li className="list-item">Downtown Minneapolis Happy Hours</li>
            <li className="list-item">South Minneapolis Happy Hours</li>
            <li className="list-item">Saint Paul Happy Hours</li>
          </ul>
        </div>
      </section>
    );
  }
}

export default LocationList;