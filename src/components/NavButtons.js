import React, { Component } from "react";


import LinkButton from '/components/LinkButton'


class TvApp extends Component {


  render() {

    return (
      <>      

        <h2>What to Calculate?</h2>
        <LinkButton to='pages/tv-size'>TV Size</LinkButton>
        <LinkButton to='pages/tv-fov'>TV Size</LinkButton>
        <LinkButton to='pages/distance-to-tv'>TV Size</LinkButton>
         
      </>
    );
  }
}

export default TvApp