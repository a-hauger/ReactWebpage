import React, { Component } from 'react';
import Slideshow from './Slideshow.js';

import picture1 from '../images/Buffalo.jpg';
import picture2 from '../images/Yellowstone.jpg';
import picture3 from './UpMyNose.jpg';

export default class AppSlideShow extends Component {
    constructor(props){
        super(props);
        //TO DO: changing image objects into get statements
        
        /*******
         STATE
         1. images: an array of images to show in the slideshow
         2. currentIndex: the current index of the images array, used as an iterator
         3. translateValue: the amount to ush the previous image to the left (off the screen)
         
         FUNCTIONS
         1. goToPrevSlide: when LeftArrow is clicked, go to the previous image in images[].  Wrapper for this.setState({})
         2. goToNextSlide: when RightArrow is clicked, go to the next image in images[].  Wrapper for this.setState({})
         3. slideWidth: on state change, finds the size of the image in the previous state for use in gotoPrevSlide and NextSlide
         *******/
        
        this.state = {
            images: [
                     {id: 1, url: {picture1}},
                     {id: 2, url: {picture2}},
                     {id: 3, url: {picture3}}
            ]
        }
    }
    
	render () {
		return(
               <div>
               <Slideshow slides = { this.state.images } />
               </div>
               )
	}
}
