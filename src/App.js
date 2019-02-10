import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  componentDidMount () {
          const script = document.createElement("script");
          script.src = "https://cdn.freecodecamp.org/testable-projects-fcc/v1/bundle.js";
          script.async = true;
          document.body.appendChild(script);
      }

  render() {
    return (
      <div className="App">
        <div id="drum-machine">
          <div id="display">Header 1</div>
          <div id="pad-container">
            <div className="drum-pad" id="Q-pad">
                Q<audio src="audio/Heater-1.mp3" className="clip" id="Q" />
            </div>
            <div className="drum-pad" id="W-pad">
                W<audio src="audio/Heater-1.mp3" className="clip" id="W" />
            </div>
            <div className="drum-pad" id="E-pad">
                E<audio src="audio/Heater-1.mp3" className="clip" id="E" />
            </div>
            <div className="drum-pad" id="A-pad">
                A<audio src="audio/Heater-1.mp3" className="clip" id="A" />
            </div>
            <div className="drum-pad" id="S-pad">
                S<audio src="audio/Heater-1.mp3" className="clip" id="S" />
            </div>
            <div className="drum-pad" id="D-pad">
                D<audio src="audio/Heater-1.mp3" className="clip" id="D" />
            </div>
            <div className="drum-pad" id="Z-pad">
                Z<audio src="audio/Heater-1.mp3" className="clip" id="Z" />
            </div>
            <div className="drum-pad" id="X-pad">
                X<audio src="audio/Heater-1.mp3" className="clip" id="X" />
            </div>
            <div className="drum-pad" id="C-pad">
                C<audio src="audio/Heater-1.mp3" className="clip" id="C" />
            </div>
          </div>
        </div>
        <p>Drum machine by CT</p>
      </div>

    );
  }
}

export default App;
