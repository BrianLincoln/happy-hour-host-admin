import React, { Component } from 'react';
import './Special.scss';

class Special extends Component {
  render() { 
    let dayLabels = new Array(7);
    dayLabels[0]="Mon";
    dayLabels[1]="Tues";
    dayLabels[2]="Wed";
    dayLabels[3]="Thurs";
    dayLabels[4]="Fri";
    dayLabels[5]="Sat";
    dayLabels[6]="Sun";    

    let dayHeaders = this.props.days.map((day) => {
      return <label className="button_sm button_accent special-day-header" key={day}>{dayLabels[day]}</label>;
    });

    return (        
        <li className="special">
          <div className="font-title-sm space-bottom-md">{this.props.description}</div>
          <div className="space-bottom-md">{this.props.time}</div>
          <div>
            {dayHeaders}
          </div>
        </li>
    );
  }
}

export default Special;