import React, { Component } from 'react';
import GalleryBoxContainer from './GalleryBoxContainer.js';
//import background from './images/Yellowstone.jpg';

//Galleries will hold a slideshow (still in progress) and a
//GalleryBoxContainer which will hold the five most recent galleries
class Galleries extends Component {
    constructor(props){
        super(props);
        
        this.state={
            backgroundColor:"black",
            height:"100vw",
        }
    }
    render(){
        return(
               <div style={this.state}>
               <GalleryBoxContainer />
            </div>
        );
    }
}

export default Galleries;
