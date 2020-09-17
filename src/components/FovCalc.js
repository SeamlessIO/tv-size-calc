import React, { Component } from "react";

class FovCalc extends Component {
  constructor() {
    super();
    this.state = {
      tvSize: 72,
      distToScreen: 5,
    };
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(event) {
    const {name, value} = event.target
    this.setState({ [name]: value })
}

fovCalc(){
  let distToScreen = this.state.distToScreen 
  let tvSize = this.state.tvSize
  let fov = Math.round((2*Math.asin(0.022*tvSize/distToScreen))*180/Math.PI)
  return fov
}



  render() {
    return (
    <>
    <form>

		Input TV Size (diagonal inches): <br />
		<input 
			name ="tvSize" 
			placeholder={this.state.tvSize}
      onChange={this.handleChange}
      type ="number"
      min="1"
      step="1"
			/>

		<br />
		Input distance to screen (meters): <br />
		<input 
			name ="distToScreen" 
			placeholder={this.state.distToScreen}
      onChange={this.handleChange}
      type = "number"
      min="0"
      step="0.1"


		
			/>
 
</form>


		Field of View: {this.fovCalc()}&deg;
    </>
    )
  }
}

export default FovCalc;