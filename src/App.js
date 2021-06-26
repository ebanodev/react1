import React, {Component} from 'react';
import './App.css';

class MyButton extends Component {
  render(){
  return ( 
    <button 
      onClick={() => {this.props.handleclick(this.props.label);}}
    >
      {this.props.label}
      </button>
    );
  }
}

class MyLabel extends Component {
  render() {
    return <p>Clique no: {this.props.text}</p>
  }
}

class App extends Component{
    constructor(props) {
      super(props);

      this.state = {
        labelText: '',
      };
    }

  setLabelText = (labelText) => {
    this.setState({ labelText });
  }

  render() {
    console.log(this.state)
    return (
      <div className="App">
        <MyLabel text={this.state.labelText}/>
        <MyButton handleclick={this.setLabelText} label="Botão 1"/>
        <MyButton handleclick={this.setLabelText} label="Botão 2"/>
        <MyButton handleclick={this.setLabelText} label="Botão 3"/>
        <MyButton handleclick={this.setLabelText} label="Botão 4"/>
      </div>
    );
  }
}

export default App;
