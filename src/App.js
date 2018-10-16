import React, { Component } from 'react';
import NavBarContainer from './NavBarContainer.js';
import AppSlideShow from './SlideshowComponents/AppSlideShow.js';
import './App.css';

class App extends Component {

  render() {
      return(
        <div>
             <NavBarContainer />
             <AppSlideShow />
             </div>
      );
  }
}

export default App;



/************
 OLD CODE
 ************/

//import LandingPage from './LandingPage.js';
//import Galleries from './Galleries.js';
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
