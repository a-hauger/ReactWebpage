import React, { Component } from 'react';
import buffalo from './Buffalo.jpg';
import PoloroidContainer from './PoloroidContainer.js';

/****************DOCUMENTATION****************
 STATUS:
 Incomplete
 
 PURPOSE:
 The Purpose of the Poloroid Gallery Selector Component is to create an array of objects.  This array of objects contains an image url, an image caption and an image id.  This array is then passed to the Poloroid Container Component which is instantiated in the render() function.
 
 DESCRIPTION:
 The state contains an array of objects named Images.  This Images array is passed into an instance of the Poloroid Container Component as the prop poloroidImages.
 
 TO DO:
 >Change the images objects from a static id, url and title to a GET statement that gathers the 8 most recent gallery objects of a designated type
 >Remove that GET statement from the state?
 
 LAST MODIFIED:
 19NOV18 - Test rendering completed and functional documentation listed
 **************END DOCUMENTATION**************/

export default class PoloroidGallerySelector extends Component {
    //TO DO: change the URL to GET statements instead of static images
    constructor(props){
        super(props);
        
        this.state={
        images:[
                {id:1, url:{buffalo}, title:"test 1"},
                {id:2, url:{buffalo}, title:"test 2"},
                {id:3, url:{buffalo}, title:"test 3"},
                {id:4, url:{buffalo}, title:"test 4"},
                {id:5, url:{buffalo}, title:"test 5"},
                {id:6, url:{buffalo}, title:"test 6"},
                {id:7, url:{buffalo}, title:"test 7"},
                {id:8, url:{buffalo}, title:"test 8"}
            ]
        }
    }
    render(){
        return(
               <PoloroidContainer poloroidImages={this.state.images} />
        )
    }
}
