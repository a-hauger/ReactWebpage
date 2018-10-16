import React, { Component } from 'react';
import Slide from './Slide.js';
import LeftArrow from './LeftArrow.js';
import RightArrow from './RightArrow.js';

class Slideshow extends Component{
    constructor(props){
        super(props);
        this.state={
            currentIndex: 0,
            translateValue:0,
        };
        this.goToPrevSlide=this.goToPrevSlide.bind(this);
        this.gotoNextSlide=this.goToNextSlide.bind(this);
        this.slideWidth=this.slideWidth.bind(this);
    }
    
    goToPrevSlide(){
        //if this is the first slide, I want to move to the last slide
        //return so we don't advance to the second to last slide
        //move the current picture the width of the image to the right
        if(this.state.currentIndex===0){
            return this.setState({
                                 currentIndex: this.props.slides.length-1,
                                 translateValue: this.state.translateValue+(this.slideWidth())
                                 });
            //decrease the current index
            //move the current picture the width of the image to the right
            this.setState(prevState=>({
                                      currentIndex:prevState.currentIndex-1,
                                      translateValue:prevState.translate+(this.slideWidth())
                                      }));
        }
    }
    
    goToNextSlide = () => {
        //if we are at the end we want to return to the first slide
        //return so we don't advance to the next slide
        if(this.state.currentIndex===this.props.slides.length-1){
            return this.setState({
                                 currentIndex:0,
                                 translateValue:0
                                 });
        }
        //increase current index
        //move the current picture the width of the image to the left
        this.setState(prevState => ({
                                    currentIndex:prevState.currentIndex+1,
                                    translateValue: prevState.translate + -(this.slideWidth())
                                    }));
    }
    
    slideWidth(){
        //use document.querySelector to find the class="slide" and find the size of the image
        return document.querySelector('.slide').clientWidth;
    }
    
    render(){
        let slides=this.props.slides.map((slide) => {
                        return <Slide key={slide.id} url={slide.url} />
                    }
                )
        return(
               <div className="slideshow-container">

                   <div className="slide-container" style={{
                       transform:`translateX(${this.state.translateValue}px)`,
                       transition: 'transform ease-out 0.45s',
                   }}>
                        {slides}
                   </div>
                   <LeftArrow goTo={ this.goToPrevSlide } />
                   <RightArrow goTo={ this.goToNextSlide } />
               </div>
        )
    }
}

export default Slideshow;


/***********
 OLD CODE
 ***********/

//import LeftArrow from './LeftArrow.js';
//import RightArrow from './RightArrow.js';

/*
 constructor(props){
 super(props);
 
 this.state={
 images:['../images/Buffalo.jpg', '../images/Yellowstone.jpg', '../images/UpMyNose.jpg'],
 currentIndex:0,
 translateValue:0
 };
 this.goToPrevSlide=this.goToPrevSlide.bind(this);
 this.goToNextSlide=this.goToNextSlide.bind(this);
 this.slideWidth=this.slideWidth.bind(this);
 }
 
 goToPrevSlide(){
 //if this is the first slide, I want to move to the last slide
 //return so we don't advance to the second to last slide
 //move the current picture the width of the image to the right
 if(this.state.currentIndex===0){
 return this.setState({
 currentIndex: this.state.images.length-1,
 translateValue: this.state.translateValue+(this.slideWidth())
 })
 
 //decrease the current index
 //move the current picture the width of the image to the right
 this.setState(prevState=>({
 currentIndex:prevState.currentIndex-1,
 translateValue:prevState.translate+(this.slideWidth())
 }))
 }
 
 }
 
 goToNextSlide(){
 //if we are at the end we want to return to the first slide
 //return so we don't advance to the second slide
 if(this.state.currentIndex===this.state.images.length -1){
 return this.setState({
 currentIndex:0,
 translateValue:0
 });
 }
 
 //increase current index
 //move the current picture the width of the image to the left
 this.setState(prevState => ({
 currentIndex:prevState.currentIndex+1,
 translateValue: prevState.translate + -(this.slideWidth())
 }));
 }
 
 slideWidth(){
 //use document.querySelector to find the class="slide" and find the size of the image
 return document.querySelector('.slide').clientWidth
 }
 
 render(){
 return(
 <div className="slideshow"
 style={{
 transform: `translateX(${this.state.translateValue}px)`,
 transition: 'transform ease-out 0.45s',
 }}
 >
 
 {
 this.state.images.map((image, i) => (
 <Slide key={i} image={image} />
 ))
 }
 
 <LeftArrow goTo={this.goToPrevSlide}/>
 <RightArrow goTo={this.goToNextSlide}/>
 </div>
 );
 }
 */
