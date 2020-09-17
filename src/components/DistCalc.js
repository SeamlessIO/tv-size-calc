import React, { Component } from "react";

class DistCalc extends Component {
  constructor() {
    super();
    this.state = {
      tvSize: 72,
      fov: 37,
    };
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(event) {
    const {name, value} = event.target
    this.setState({ [name]: value })
}

distCalc(){
  let tvSize = this.state.tvSize
  let fov =  ((this.state.fov*Math.PI)/180)
  // also bad equation
  let distToScreen = Math.abs(Math.round((0.022*tvSize)/Math.sin(fov/2)))
  return distToScreen
}


  render() {
    return (
    <>
    
 
		Input TV size (diagonal inches): <br />
		<input 
			name ="tvSize" 
			placeholder={this.state.tvSize}
      onChange={this.handleChange}
      type ="number"
      min="1"
			/>

		<br />
		
	

    Input field of view (degrees): <br />
      <input 
        name ="fov" 
        placeholder={this.state.fov}
        onChange={this.handleChange}
        type= "number"
        min="0"
        max="180"
        />	
    <br />

		Distance to TV: {this.distCalc()} meters
    </>
    );
  }
}

export default DistCalc;