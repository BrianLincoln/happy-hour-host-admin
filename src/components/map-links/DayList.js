import React, { Component } from 'react';

class DayList extends Component {
  render() { 
    return (
      <section className="col-xs-12 col-md-6 map-link-section">
        <div className="card col-xs-12">
          <h1 className="card-heading">Best Specials Every Day</h1>
          <ul className="list-group">
            <li className="list-item">Monday Happy Hours</li>
            <li className="list-item">Tuesday Happy Hours</li>
            <li className="list-item">Wednesday Happy Hours</li>
            <li className="list-item">Thursday Happy Hours</li>
            <li className="list-item">Friday Happy Hours</li>
            <li className="list-item">Saturday Happy Hours</li>
            <li className="list-item">Sunday Happy Hours</li>
          </ul>
        </div>
      </section>
    );
  }
}

export default DayList;