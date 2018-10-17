import React, { Component } from 'react';
import picture from './images/Buffalo.jpg';

//GalleryBoxContents holds an image that fits into a GalleryBox
//GalleryBox is the calling component
class GalleryBoxContents extends Component {
    constructor(props){
        super(props);
        
        this.state={

        };
    }
    
	render(){
		return(
               <div>
               <section bottom="20px">
               <img src={picture} alt="" height="150vw"/>
               </section>
			</div>
		);
	}
}

export default GalleryBoxContents;
