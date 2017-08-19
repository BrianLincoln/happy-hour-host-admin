import React, { Component } from 'react';
import Special from './Special';
import './Result.scss';

class Result extends Component {
  render() { 
    if (this.props.specials) {
      let specials = this.props.specials.map((special) => {
        return <Special key={special._id} {...special} />
      });
      return (        
          <li className="text-result">
            <h3 className="text-result-name">{this.props.name}</h3>
            <ul className="special-list">{specials}</ul>
          </li>
      );
    } else {
      return false;
    }
  }
}

export default Result;