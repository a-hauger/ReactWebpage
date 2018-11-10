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
 
 STYLE:
 >Used vw to make the width and margin reactive
 >Used box-sizing: border-box to keep each element uniform
 >>The figure holds the image and the caption, this is the whole poloroid element
 >>The image and the caption must be altered on their own and if a finer style is needed then I change the individual object
 >>If I want to change details of the entire poloroid, I change the style of the <figure /> tag
 >>>If I want to change how the poloroids appear on the screen, then I change the parent (Poloroid Container) div
 
 TO DO:
 >Create class names for figure
 >Take the CSS code from the state and export it to a CSS file
 >Import above CSS file
 >change <img src= > to the Poloroid's .url prop
 --->NEEDS TO CHANGE APP COMPONENT TO A GALLERY PAGE<---
 
 LAST MODIFIED:
 19NOV18 - Test rendering completed and functional documentation listed
 19NOV18 - Added style documentation
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
                backgroundColor:"white",
                WebkitTransform:"rotate(0"+this.props.rotate+"deg)"
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
