import React, { Component } from 'react';
import GalleryBoxContainer from './GalleryBoxContainer.js';
import background from './images/Yellowstone.jpg';

class Galleries extends Component {
    constructor(props){
        super(props);
        
        this.state={
            position: "fixed",
            top:"0px",
            backgroundImage: "url("+background+")",
            backgroundRepeat:"no-repeat",
            backgroundPosition:"center",
            backgroundSize:"cover",
            width:"100%",
            height:"100%"
        }
    }
    render(){
        return(
               <div>
               <section style={this.state}>
               <p>{this.props.children}</p>
               <GalleryBoxContainer changePage={this.props.changePage}/>
               </section>
            </div>
        );
    }
}

export default Galleries;
