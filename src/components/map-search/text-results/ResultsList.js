import React, { Component } from 'react';
import Result from './Result';
import './ResultList.scss';

class ResultsList extends Component {
  render() { 
    const results = this.props.results.map((result) => {
      return <Result key={result.id} {...result} /> 
    });     
    return (
      <ul className="result-list">
        {results}
      </ul>
    );
  }
}

export default ResultsList;