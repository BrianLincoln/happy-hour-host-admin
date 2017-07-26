import React, { Component } from 'react';
import DailyList from './DailyList';
import LocationList from './LocationList';
import './MapLinks.scss';

class MapLinkWrapper extends Component {
  render() { 
    return (
      <section className="container space-top-lg space-bottom-lg">
        <div className="row">      
          <DailyList />
          <LocationList />
        </div>
      </section>
    );
  }
}

export default MapLinkWrapper;