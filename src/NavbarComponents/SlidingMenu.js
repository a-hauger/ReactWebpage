import React, { Component } from 'react';
import Menu from './Menu.js';
import MenuItem from './MenuItem.js';

const menuShow={
width:"260px",
height:"100%",
position: "fixed",
top:"62px",
left:"0px",
textAlign:"center",
zIndex:"10000",
};

const menuHide={
width:"260px",
height:"100%",
position: "fixed",
top:"59px",
left:"0px",
textAlign:"center",
zIndex:"-1",
};

class SlidingMenu extends Component {
    /*
     SlidingMenu is responsible for:
     1. Rendering the Menu.
     2. Rendering the MenuItems.
     3. Passing those items to MenuItems.
     4. Showing/Hiding the Menu on MenuButton click (in NavBar Component) and Menu click
     */
    render(){
        let styleOption=menuHide;
        
        if (this.props.menuVisibility){
            styleOption=menuShow;
        }
        
        return(
               <div style={styleOption}
                    onClick={this.props.handleClick}>
               <Menu>
                    <MenuItem changePage={this.props.handleNavChange} name="home">Home</MenuItem>
                   <MenuItem changePage={this.props.handleNavChange} name="landscape">Landscape Galleries</MenuItem>
                   <MenuItem changePage={this.props.handleNavChange}  name="event">Event Galleries</MenuItem>
                   <MenuItem changePage={this.props.handleNavChange}  name="studio">Studio Galleries</MenuItem>
                   <MenuItem changePage={this.props.handleNavChange} name="all">All Galleries</MenuItem>
                   <MenuItem changePage={this.props.handleNavChange}  name="about">About</MenuItem>
               </Menu>
            </div>
        );
    }
}

export default SlidingMenu;
