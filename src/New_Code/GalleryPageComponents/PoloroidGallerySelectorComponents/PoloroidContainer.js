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
 
 TO DO:
 >Create class name for the div that renders the poloroids
 >Take the CSS code from the state and export it to a CSS file
 >Import said CSS file
 >CHANGE THE CAPTION PASSED IN FROM A SIMPLE TEST TO A SERIES OF GALLERY DESCRIPTORS
 --->NEEDS TO PASS IN A CHANGE STATUS WRAPPER<---
 
 LAST MODIFIED:
 19NOV18 - Test rendering completed and functional documentation listed
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
                    return <Poloroid url={poloroid.url}>
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
