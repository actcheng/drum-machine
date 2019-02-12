import React, { Component } from 'react';
import './App.css';

let dict = {
  Q: {name:'Heater 1',
      audio:"https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3"},
  W: {name:'Heater 2',
      audio:"https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3"},
  E: {name:'Heater 3',
      audio:"https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3"},
  A: {name:'Dsc Oh',
      audio:"https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3"},
  S: {name:'Kick n Hat',
      audio:"https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3"},
  D: {name:'KICK',
      audio:"https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3"},
  Z: {name:'Chord 1',
      audio:"https://s3.amazonaws.com/freecodecamp/drums/Chord_1.mp3"},
  X: {name:'Chord 2',
      audio:"https://s3.amazonaws.com/freecodecamp/drums/Chord_2.mp3"},
  C: {name:'Chord 3',
      audio:"https://s3.amazonaws.com/freecodecamp/drums/Chord_3.mp3"},
}

let validKeys = [...Object.keys(dict),
                 ...Object.keys(dict).map(item=>item.toLowerCase())]

class DrumPad extends Component {

  render() {
    let id = this.props.id // onClick={() => this.playAudio(id)}
    return(
      <div className="drum-pad" id={id.concat('pad')} onClick={()=>this.props.playAudio(id)}>
          {id}<audio src={dict[id].audio} type="audio/mp3"  className="clip" id={id} />
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
  playAudio(id){
    this.setState({ displayText: dict[id].name  })
    var sound = document.getElementById(id);
    var pad = document.getElementById(id.concat('pad'));
    pad.className = 'pad-clicked'
    setTimeout(sound.play(),300);
    setTimeout(()=>{pad.className = 'drum-pad'},300);
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
            <DrumPad id='Q' playAudio={this.playAudio.bind(this)} />
            <DrumPad id='W' playAudio={this.playAudio.bind(this)}/>
            <DrumPad id='E' playAudio={this.playAudio.bind(this)}/>
            <DrumPad id='A' playAudio={this.playAudio.bind(this)}/>
            <DrumPad id='S' playAudio={this.playAudio.bind(this)}/>
            <DrumPad id='D' playAudio={this.playAudio.bind(this)}/>
            <DrumPad id='Z' playAudio={this.playAudio.bind(this)}/>
            <DrumPad id='X' playAudio={this.playAudio.bind(this)}/>
            <DrumPad id='C' playAudio={this.playAudio.bind(this)}/>
          </div>
        </div>
        <p>Drum machine by CT</p>
      </div>

    );
  }
}



export default App;
