import React, { Component } from 'react';
import GalleryBoxContents from './GalleryBoxContent.js';
//import buffalo from './images/Buffalo.jpg';

//GalleryBox stores the information to make a poloroid shaped gallery box
class GalleryBox extends Component {
    constructor(props){
        super(props);
        
        this.state={
            height:"20vw",
            width:"15vw",
            minWidth:"18vw",
            minHeight:"15vw",
            backgroundColor:"white",
            margin: "15px",
            textAlign: "center",
        }
    }
	render(){
		return(
               <div>
                   <section style={this.state}>
                        <GalleryBoxContents />
                   </section>
               </div>
		);
	}
}

export default GalleryBox;
