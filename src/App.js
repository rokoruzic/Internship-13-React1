import React, { Component } from "react";
import ColoredText from "./components/ColoredText";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      color: "",
      index1: true,
      index2: true,
      index3: true
    };
  }
  handleClick = event => {
    this.setState({
      color: event.currentTarget.textContent
    });
  };
  handleClickIndex1 = () => {
    this.setState({
      index1: !this.state.index1
    });
  };
  handleClickIndex2 = () => {
    this.setState({
      index2: !this.state.index2
    });
  };
  handleClickIndex3 = () => {
    this.setState({
      index3: !this.state.index3
    });
  };
  indexColor = index => {
    if (index) return this.state.color;
    else return "Black";
  };
 

  render() {

    let redDiv = {
      fontWeight: ""
    };
    if (this.state.color == "Red") {
      redDiv = {
        fontWeight: "bold"
      };
    }
    let greenDiv = {
      fontWeight: ""
    };
    if (this.state.color == "Green") {
      greenDiv = {
        fontWeight: "bold"
      };
    }
    let blueDiv = {
      fontWeight: ""
    };
    if (this.state.color == "Blue") {
      blueDiv = {
        fontWeight: "bold"
      };
    }
    let indexDiv1 = {
      fontWeight: "bold"
    };
    if (!this.state.index1) {
      indexDiv1 = {
        fontWeight: ""
      };
    }

    let indexDiv2 = {
      fontWeight: "bold"
    };
    if (!this.state.index2) {
      indexDiv2 = {
        fontWeight: ""
      };
    }

    let indexDiv3 = {
      fontWeight: "bold"
    };
    if (!this.state.index3) {
      indexDiv3 = {
        fontWeight: ""
      };
    }

    return (
      <>
        <h1>Colors</h1>
        <div style={redDiv} onClick={this.handleClick}>
          Red
        </div>
        <div onClick={this.handleClick} style={blueDiv}>
          Blue
        </div>
        <div onClick={this.handleClick} style={greenDiv}>
          Green
        </div>
        <h1>Indexes</h1>
        <div onClick={this.handleClickIndex1} style={indexDiv1}>
          1
        </div>
        <div onClick={this.handleClickIndex2} style={indexDiv2}>
          2
        </div>
        <div onClick={this.handleClickIndex3} style={indexDiv3}>
          3
        </div>
        <h1>Results</h1>

        <ColoredText label="1" color={this.indexColor(this.state.index1)} />
        <ColoredText label="2" color={this.indexColor(this.state.index2)} />
        <ColoredText label="3" color={this.indexColor(this.state.index3)} />
      </>
    );
  }
}

export default App;
