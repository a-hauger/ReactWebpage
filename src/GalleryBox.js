import React, { Component } from 'react';
import GalleryBoxContents from './GalleryBoxContent.js';
import buffalo from './images/Buffalo.jpg';

class GalleryBox extends Component {
    constructor(props){
        super(props);
        
        this.state={
        textAlign:"center",
        margin: "20px 20px 20px 20px",
        width: "270px",
        height: "300px",
        background:"#f9f9f6",
        display:"inline-block"
        }
    }
	render(){
		return(
               <div style={this.state}>
                    <GalleryBoxContents>{this.props.children}</GalleryBoxContents>
               </div>
		);
	}
}

export default GalleryBox;
