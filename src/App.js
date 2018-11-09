import React, { Component } from 'react';
import PoloroidGallerySelector from './New_Code/GalleryPageComponents/PoloroidGallerySelectorComponents/PoloroidGallerySelector.js';
import './App.css';

class App extends Component {
    constructor(props){
        super(props);
        
        //if I want finer details, I change the style of that specific element
        //if I want to give detail to the entire poloroid, I change the style of the <figure /> tag
        //if I want to manipulate how the poloroids appear on the screen, I change the div
    }
  render() {
      return(
      <PoloroidGallerySelector />
      );
  }
}

export default App;



/************
 OLD CODE
 ************/
//import NavBarContainer from './NavbarComponents/NavBarContainer.js';
//import AppSlideShow from './SlideshowComponents/AppSlideShow.js';
//import Galleries from './Galleries.js';

//import LandingPage from './LandingPage.js';
//
//
//import Slideshow from './SlideshowComponents/Slideshow.js';

/*
 constructor(props){
 super(props);
 
 this.state={ page:<LandingPage />}
 this.changePage=this.changePage.bind(this)
 }
 
 changePage(newPage){
 var pageToChange=<LandingPage />;
 if(newPage==="landscape"){
 pageToChange=<Galleries changePage={this.changePage}>Landscape Galleries</Galleries>;
 } else if(newPage==="event"){
 pageToChange=<Galleries changePage={this.changePage}>Event Gallieres</Galleries>;
 } else if(newPage==="studio"){
 pageToChange=<Galleries changePage={this.changePage}>Studio Galleries</Galleries>;
 } else if(newPage==="all"){
 pageToChange=<Galleries changePage={this.changePage}>All Galleries</Galleries>;
 }
 this.setState({ page:pageToChange });
 }*/

/*return (
 <div>
 <NavBarContainer handleNavChange={this.changePage}/>
 {this.state.page}
 </div>
 );*/
