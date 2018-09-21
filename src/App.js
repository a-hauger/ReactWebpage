import React, { Component } from 'react';
//import LandingPage from './LandingPage.js';
//import Galleries from './Galleries.js';
import NavBarContainer from './NavBarContainer.js';
import Slideshow from './SlideshowComponents/Slideshow.js';
import './App.css';

class App extends Component {
    constructor(props){
        super(props);
        
        //this.state={ page:<Galleries />}
        //this.changePage=this.changePage.bind(this)
    }
    /*
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
    }
    */
  render() {
    /*return (
      <div>
            <NavBarContainer handleNavChange={this.changePage}/>
            {this.state.page}
      </div>
    );*/
      return(
        <div>
             <NavBarContainer handleNavChange={this.changePage}/>
             <Slideshow />
             </div>
      );
  }
}

export default App;
