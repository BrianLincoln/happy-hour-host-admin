import React, { Component } from 'react';
import DayList from './DayList';
import LocationList from './LocationList';
import './MapLinks.scss';

class MapLinkWrapper extends Component {
  render() { 
    return (
      <section className="container space-top-lg space-bottom-lg">
        <div className="row">      
          <DayList />
          <LocationList />
        </div>
      </section>
    );
  }
}

export default MapLinkWrapper;