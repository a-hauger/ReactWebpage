import React, { Component } from 'react';
import GalleryBox from './GalleryBox.js';
//import buffalo from './images/Buffalo.jpg';

//The GallerBoxContainer component is a div that will contain
//up to five poloroid shaped gallery boxes
class GalleryBoxContainer extends Component{
	constructor(props){
		super(props);

		this.state={
            display:"flex",
            flexFlow: "row wrap",
            justifyContent: "center",
            alignItems: "center"
		}
	}
//eventually I want a render() method with five gallery boxes
//one box for each of the five most recent galleries
	render(){
		return(
            <div className="gallery-container" style={this.state}>
               <GalleryBox />
			</div>
		);
	}
}

export default GalleryBoxContainer;
