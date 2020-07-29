import React, { useState } from 'react';

import ButtonGroup from 'react-bootstrap/ButtonGroup';
import ToggleButton from 'react-bootstrap/ToggleButton';


function TvAppRadio() {
    const [radioValue, setRadioValue] = useState('1');
  
    const radios = [
      { name: 'Active', value: '1' },
      { name: 'Radio', value: '2' },
      { name: 'Radio', value: '3' },
    ];
  
    return (
      <>
  
        <br />
        <ButtonGroup toggle>
          {radios.map((radio, idx) => (
            <ToggleButton
              key={idx}
              type="radio"
              variant="secondary"
              name="radio"
              value={radio.value}
              checked={radioValue === radio.value}
              onChange={(e) => setRadioValue(e.currentTarget.value)}
            >
              {radio.name}
            </ToggleButton>
          ))}
        </ButtonGroup>
      </>
    );
  }
  


  export default TvAppRadio;