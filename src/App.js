import React, { Component } from 'react';
import './App.css';

let dict = {
  Q: {name:'Q', audio:"./audio/Heater-1.mp3"},
  W: {name:'W', audio:"audio/Heater-1.mp3"},
  E: {name:'E', audio:"audio/Heater-1.mp3"},
  A: {name:'A', audio:"audio/Heater-1.mp3"},
  S: {name:'S', audio:"audio/Heater-1.mp3"},
  D: {name:'D', audio:"audio/Heater-1.mp3"},
  Z: {name:'Z', audio:"audio/Heater-1.mp3"},
  X: {name:'X', audio:"audio/Heater-1.mp3"},
  C: {name:'C', audio:"audio/Heater-1.mp3"},
}

let validKeys = [...Object.keys(dict),
                 ...Object.keys(dict).map(item=>item.toLowerCase())]

class DrumPad extends Component {

  render() {
    let id = this.props.id
    return(
      <div className="drum-pad" id={id.concat('pad')} >
          {id}<audio src={dict[id].audio} type="audio/mp3" className="clip" id={id} />
      </div>
    )
  }
}

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      displayText: 'Press key'
    }
    this.playAudio = this.playAudio.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick(event){

  }
  playAudio(key){
    this.setState({ displayText: dict[key].name  })

    console.log(key, 'Play')
  }
  handleKeyPress(event) {
    if (validKeys.includes(event.key)){
      this.playAudio(event.key.toUpperCase());
    }
  }

  componentWillMount(){
    document.addEventListener("keydown", this.handleKeyPress.bind(this));
  }

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
          <div id="display">{this.state.displayText}</div>
          <div id="pad-container">
            <DrumPad id='Q' />
            <DrumPad id='W' />
            <DrumPad id='E' />
            <DrumPad id='A' />
            <DrumPad id='S' />
            <DrumPad id='D' />
            <DrumPad id='Z' />
            <DrumPad id='X' />
            <DrumPad id='C' />
          </div>
        </div>
        <p>Drum machine by CT</p>
      </div>

    );
  }
}

export default App;
