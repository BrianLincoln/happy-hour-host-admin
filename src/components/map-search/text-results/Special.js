import React, { Component } from 'react';
import './Special.scss';
import dayLabels from './../../../utils/DayLabels';
import timeConverter from './../../../utils/TimeConverter';

class Special extends Component {
  render() { 

    let dayHeaders = this.props.days.map((day) => {
      return <label className="button_sm button_accent special-day-header" key={day}>{dayLabels[day]}</label>;
    });

    let times = this.props.times.map((time) => {
      const startTime = timeConverter(time.start);
      const endTime = timeConverter(time.end);

      return <label className="font-base-alt" key={time._id}>{startTime} - {endTime}</label>;
    });    

    return (        
        <li className="special">
          <div className="special-headline space-bottom-md">{this.props.headline}</div>
          <div className="special-description space-bottom-md">{this.props.description}</div>
          <div>
            {dayHeaders}
          </div>
          <div>
            {times}
          </div>
        </li>
    );
  }
}

export default Special;