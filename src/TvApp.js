import React, { Component } from "react";
import DistCalc from "./components/DistCalc";
import TvSizeCalc from "./components/TvSizeCalc";
import FovCalc from "./components/FovCalc";



class TvApp extends Component {

  constructor() {
    super();
    this.state = {
      name: "React",
      showHideTvSizeCalc: true,
      showHideFovCalc: false,
      showHideDistCalc: false
    };
    this.hideComponent = this.hideComponent.bind(this);
  }

  hideComponent(name) {
    console.log(name);
    switch (name) {
      case "showHideTvSizeCalc":
        this.setState(
          { 
            showHideTvSizeCalc: true,
            showHideFovCalc: false,
            showHideDistCalc: false
         });
        break;
      case "showHideFovCalc":
        this.setState(
          {
             showHideFovCalc: true,
             showHideTvSizeCalc: false,
            showHideDistCalc: false
           }
           );
        break;
      case "showHideDistCalc":
        this.setState(
          { 
            showHideDistCalc: true,
            showHideFovCalc: false,
            showHideTvSizeCalc: false
           }
           );
        break;
      default:
        console.log("Nothing")
      
    }
  }

  render() {
    const { showHideTvSizeCalc, showHideFovCalc, showHideDistCalc } = this.state;
    return (
      <>
      
      <div className="App">

   
        <h2>What to Calculate?</h2>
          <button onClick={() => this.hideComponent("showHideTvSizeCalc")} type="button" class="btn btn-primary m-2">
            TV Size
          </button>
          <button onClick={() => this.hideComponent("showHideFovCalc")} type="button" class="btn btn-primary m-2">
            TV Field of View
          </button>
          <button onClick={() => this.hideComponent("showHideDistCalc")} type="button" class="btn btn-primary m-2">
            Distance to TV
          </button>
         
     <hr />
        {showHideTvSizeCalc && <TvSizeCalc />}
        {showHideFovCalc && <FovCalc />}
        {showHideDistCalc && <DistCalc />}
        <hr />
      </div>
      </>
    );
  }
}

export default TvApp