import React, { Component } from 'react';
import './../../sprak-styles/sprak.css';
import './App.scss';
import Homepage from './../homepage';
import City from './../city';
import Admin from './../admin';
import config from './../../config';
import {
  BrowserRouter as Router,
  Link,
  Route,
  Switch,
} from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="site-header">
          <a href="/" className="font-title-sm">
            <i className="logo">
              <svg width="60" height="60" xmlns="http://www.w3.org/2000/svg">
              <g>
                <title>background</title>
                <rect fill="none" id="canvas_background" height="62" width="62" y="-1" x="-1"/>
                <g display="none" overflow="visible" y="0" x="0" height="100%" width="100%" id="canvasGrid">
                <rect fill="url(#gridpattern)" strokeWidth="0" y="0" x="0" height="100%" width="100%"/>
                </g>
              </g>
              <g>
                <title>Layer 1</title>
                  <path id="svg_9" d="m29.99997,1c-16.016428,0 -28.99997,12.983549 -28.99997,28.999984c0,16.016436 12.983542,28.999984 28.99997,28.999984c16.016428,0 28.99997,-12.983549 28.99997,-28.999984c0,-16.016436 -12.983542,-28.999984 -28.99997,-28.999984zm0,52.012013c-12.692226,0 -23.014012,-10.323787 -23.014012,-23.012028c0,-12.690237 10.321787,-23.014024 23.014012,-23.014024c12.692226,0 23.012017,10.321792 23.012017,23.014024c0,12.692232 -10.323782,23.012028 -23.012017,23.012028zm-0.001995,-44.711136c-1.103412,0 -1.993324,0.893903 -1.993324,1.99532l0,18.398848l-12.0637,5.275627c-1.009632,0.442961 -1.468555,1.6202 -1.025594,2.629832c0.327232,0.748245 1.057519,1.195197 1.825717,1.195197c0.267373,0 0.540732,-0.053874 0.800123,-0.169602l13.220985,-5.782438c0.009977,-0.003991 0.017958,-0.007981 0.025939,-0.011972l0.007981,-0.003991c0.02993,-0.011972 0.045892,-0.039906 0.073827,-0.049883c0.207513,-0.103757 0.401059,-0.225471 0.556694,-0.389087c0.067841,-0.067841 0.105752,-0.155635 0.15763,-0.233452c0.095775,-0.1277 0.201527,-0.253406 0.259392,-0.407045c0.047888,-0.119719 0.051878,-0.249415 0.075822,-0.377116c0.025939,-0.129696 0.075822,-0.243429 0.075822,-0.373125l0,-19.703787c0,-1.099421 -0.893903,-1.993325 -1.997315,-1.993325z" strokeWidth="0" fill="#24c9f2"/>
              </g>
              </svg>       
            </i>       
            <br />     
            happy hour host
          </a>
        </header>         

        <Router>
          <div>
            <Switch>
              <Route exact path="/" render={ ()  => <Homepage 
                  config={config}
                /> 
              }/>
              <Route exact path="/c/:city/:area?" render={ (meta)  => <City 
                  config={config}
                  city={meta.match.params.city}
                  area={meta.match.params.area}
                /> 
              }/>
              <Route exact path="/admin" render={ ()  => <Admin 
                  config={config}                 
                /> 
              }/>              
            </Switch>
          </div>
        </Router>




      </div>
    );
  }
}

export default App;
