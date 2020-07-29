import React, { Component } from "react";

class TvSizeCalc extends Component {
  constructor() {
    super();
    this.state = {
      fov: 37,
      distToScreen: 5,
    };
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(event) {
    const {name, value} = event.target
    this.setState({ [name]: value })
}

tvSizeCalc(){
  let distToScreen = this.state.distToScreen 
  let fov = (this.state.fov*Math.PI/180)
  //values are not correct... something is wrong
  let tvSize = Math.abs(Math.round((distToScreen*Math.sin(fov/2))/0.022))
  return tvSize
}

  render() {
    return (
    <>
      <h3>Calculate TV Size</h3>
		
      Input distance to screen (meters): <br />
      <input 
        name ="distToScreen" 
        onChange={this.handleChange}
        placeholder={this.state.distToScreen}
        min="0"
        type ="number"
        max="1000"
        />
      <br />
      Input desired field of view (degrees): <br />
      <input 
        name ="fov" 
        placeholder={this.state.fov}
        onChange={this.handleChange}
        type= "number"
        min="0"
        max="180"
        />	
    <br />
    
      TV Size: {this.tvSizeCalc()} inches 
      </>  )
  }
}

export default TvSizeCalc;