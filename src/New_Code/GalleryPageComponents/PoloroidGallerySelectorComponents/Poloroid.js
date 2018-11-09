import React, { Component } from 'react';
import buffalo from './Buffalo.jpg';

/****************DOCUMENTATION****************
 STATUS:
 Incomplete
 
 PURPOSE:
 The purpose of the Poloroid Component is to take an image and children and render them as Poloroid style images.  These Poloroid style images are links to their respective gallery pages
 
 DESCRIPTION:
 >Poloroid will be instantiated with key, url and children props
 >key is currently the image's id number
 >url is currently the static location of the image
 >>due to static image location, current <img src= > an imported image.  See TO DO section
 >children is currently the image caption
 
 TO DO:
 >Create class names for figure
 >Take the CSS code from the state and export it to a CSS file
 >Import above CSS file
 >change <img src= > to the Poloroid's .url prop
 --->NEEDS TO CHANGE APP COMPONENT TO A GALLERY PAGE<---
 
 LAST MODIFIED:
 19NOV18 - Test rendering completed and functional documentation listed
 **************END DOCUMENTATION**************/

export default class Poloroid extends Component {
    constructor(props){
        super(props);
        
        this.state={
            figure:{
                width:"20vw",
                margin:"1vw 1vw",
                border:"1px solid #777",
                padding:"1vw",
                boxSizing:"border-box",
                boxShadow:"5px 10px #888888",
                backgroundColor:"white"
            },
            image:{
                width:"100%"
            },
            figcaption:{
                textAlign:"center",
                padding:"8px 4px"
            }
        }
    }
    
    render(){
        return(
            <div>
               <figure style={this.state.figure}>
                   <img src={buffalo} style={this.state.image}/>
                   <figcaption style={this.state.figcaption}>
                        {this.props.children}
                   </figcaption>
               </figure>
            </div>
        )
    }
}
