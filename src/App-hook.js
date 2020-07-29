import React, {useState} from 'react';

import './App.css';

function App() {

	const [ tvSize, setTvSize ]= useState()
	const [ distToScreen, setDistToScreen ] = useState()
	const [ fov, setFov ] =useState()
	const [ option, setOption ] = useState('Fov')
	function tvSizeFixed(event) {
	//	const {name,
	//	setFov(360/Math.PI*Math.atan(tvSize/2/distToScreen))
	}	
	

	function distToScreenFixed() {
	//	setFov(360/Math.PI*Math.atan(tvSize/2/distToScreen))
	}

	function fovFixed() {
	
	}

  function submitForm() {
	}


	function handleChange(event) {
	

	}


  return (
    <div className="App">
			<form onSubmit = {submitForm()}>
				<label>
					What do you want to calculate? <br />
				<select value = {option} onChange = {handleChange}>
					<option value ='fov'> Field of View </option>
					<option value='tvSize'>TV Size</option>
					<option value='distToScreen'>Viewing Distance</option>
				</select>
				</label>
				<input type='submit' value='Submit' />
			</form>


		<input 
			name ="tvSize" 
			placeholder="Input Size"
			onChange={tvSizeFixed}
			/>

		<br />
		
		<input 
			name ="setDistToScreen" 
			placeholder="Distance to Screen"
			onChange={distToScreenFixed}
			/>

		<br />
		
		<input 
			name ="fov" 
			placeholder="FOV"
			onChange={fovFixed}
			/>	
		<br />
		TV Size = {tvSize}
		<br />
		Distance to screen = {distToScreen}
		<br />
		Field of View = {fov}
		
		</div>
  )
}

export default App;
