import React, { Component } from 'react';
import buffalo from './Buffalo.jpg';
import Poloroid from './Poloroid.js';

/****************DOCUMENTATION****************
 STATUS:
 Incomplete
 
 PURPOSE:
 The Purpose of the Poloroid Container Component is to take an array of images and generate Poloroid Components.
 
 DESCRIPTION:
 In the render function, I created a variable that holds a series of Poloroid components.  These Poloroid Components are generated through the mapping of the Image Array passed in as a prop to this component. Each Poloroid component passes the image's url as a prop and the image's caption as a child.
 
 STYLE:
 >This component changes how the poloroids appear on the screen
 >Used vw to make component reactive for the width of the container box
 >Changed margin to auto to allow justify content to do its thing (center the poloroids evenly)
 >Created cases for the poloroids to rotate -->WILL BE DONE DIFFERENT IN CSS<--
 >>display:flex puts the poloroids on the same line and will shrink them if it can't render the images without overlap
 >>flex-wrap:wrap will move images to a new row if display:wrap will shrink the contents
 >>justify-content:space-between evenly spaces the poloroids that remain on the full sized line of images
 
 TO DO:
 >Create class name for the div that renders the poloroids
 >Take the CSS code from the state and export it to a CSS file
 >Import said CSS file
 >CHANGE THE CAPTION PASSED IN FROM A SIMPLE TEST TO A SERIES OF GALLERY DESCRIPTORS
 --->NEEDS TO PASS IN A CHANGE STATUS WRAPPER<---
 
 LAST MODIFIED:
 19NOV18 - Test rendering completed and functional documentation listed
 19NOV18 - Added style documentation
 **************END DOCUMENTATION**************/


export default class PoloroidContainer extends Component {
    constructor(props){
        super(props);
        
        this.state={
            display:"flex",
            flexWrap:"wrap",
            width:"100vw",
            border:"1px dashed gray",
            margin:"auto",
            justifyContent:"space-between",
            backgroundColor:"black"
        }
    }
    
    render(){
        let poloroids = this.props.poloroidImages.map((poloroid) => {
                let degreesRotate=358;
                if(poloroid.id%2===0){
                    degreesRotate=2;
                }
                if(poloroid.id%5===0){
                    degreesRotate=5;
                }
                if(poloroid.id%3===0){
                    degreesRotate=0;
                }
                if(poloroid.id%7===0){
                    degreesRotate=355;
                }
                return <Poloroid url={poloroid.url} rotate={degreesRotate}>
                    {poloroid.title}
                </Poloroid>
        })
        return(
               <div style={this.state}>
                    {poloroids}
               </div>
        );
    }
}
