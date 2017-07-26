import React, { Component } from 'react';
import Special from './Special';

class Result extends Component {
  render() { 
    if (this.props.specials) {
      let specials = this.props.specials.map((special) => {
        return <Special key={special.id} {...special} />
      });
      return (        
          <li className="card text-result">
            <h2 className="card-heading">{this.props.name}</h2>
            <ul className="special-list">{specials}</ul>
          </li>
      );
    } else {
      return false;
    }
  }
}

export default Result;