import React, { Component } from 'react';
import NavBar from './NavBar.js';
import SlidingMenu from './SlidingMenu.js';


class NavBarContainer extends Component {
    /*
     NavBarContainer is responsible for:
     1. Loading the NavBar and Sliding Menues.
     2. Handling clicks on the menu and search icons.
     3. Changing the visibility of the menu and search functions
     
     handleClick is passed to the NavBar and then ultimately to the BarItem
     handleClick is passed down to SlidingMenu
     this.state.visible is passed down to SlidingMenu
     */
    constructor(props){
        super(props);
        
        this.state={
            visibleMenu: false,
            visibleSearch: false
        };
        
        this.handleMenuClick = this.handleMenuClick.bind(this);
        this.handleSearchClick = this.handleSearchClick.bind(this);
        this.toggleMenu = this.toggleMenu.bind(this);
        this.toggleSearch = this.toggleSearch.bind(this);
    }
    
    //wrapper to set the Menu state to visible/not visible
    toggleMenu(){
        this.setState({
                      visibleMenu: !this.state.visibleMenu
                      });
    }
    
    //wrapper to set the Search state to visible/not visible
    toggleSearch(){
        this.setState({
                      visibleSearch: !this.state.visibleSearch
                      });
    }
    
    //handles the onClick DOM event for the Menu
    handleMenuClick(e){
        this.toggleMenu();
        
        e.stopPropagation(); //parents not told of the click
    }
    
    //handles the onClick DOM event for the Search Bar
    handleSearchClick(e){
        this.toggleSearch();
        
        e.stopPropagation(); //parents not told of the click
    }
    
    render(){
        return(
               <div>
                   <NavBar
                       handleMenuClick={this.handleMenuClick}
                       handleSearchClick={this.handleSearchClick}
                       searchVisibility={this.state.visibleSearch}
                   />
                   <SlidingMenu
                       handleClick={this.handleMenuClick}
                       menuVisibility={this.state.visibleMenu}
                       handleNavChange={this.props.handleNavChange}
                   />
               </div>
        );
    }
}

export default NavBarContainer;
