import React, { Component } from 'react';
import picture from './images/Buffalo.jpg';

//GalleryBoxContents holds an image that fits into a GalleryBox
//GalleryBox is the calling component
class GalleryBoxContents extends Component {
    constructor(props){
        super(props);
        
        this.state={
        header:{margin:"1em 0em 0em 0em"},
        remainder:{margin:"0em"},
        test:{
            top:"20%",
            backgroundColor:"green"
            }
        };
    }
    
	render(){
		return(
               <div>
                    <p style={this.state.test}>
                       <img src={picture} alt="" height="150vw"/>
                       <p style={this.state.header}>Gallery Name</p>
                       <p style={this.state.remainder}>Shoot Date(s)</p>
                       <p style={this.state.remainder}>Location(s)</p>
                   </p>
			</div>
		);
	}
}

export default GalleryBoxContents;
