import React, { Component } from 'react';
import Bar from './Bar.js';
import BarItem from './BarItem.js';
import MenuButton from './MenuButton.js';
import SearchButton from './SearchButton.js';
import SearchBox from './SearchBox.js';

const navBarDivStyle={
    width:"100%",
    position: "fixed",
    top:"0px",
    textAlign:"left",
    zIndex:"2"
};


class NavBar extends Component {
    /*
     NavBar is responsible for:
     1. Rendering the NavBar
     2. Passing the BarItems and handleClick functions down to the Bar class
     3. Stylizing the NavBar
     
     MenuButton is responsible for the onClick DOM event, utilizing the handleClick function from the parent container.
     */
    render() {
        return (
                <div className="navbar" style={navBarDivStyle}>
                    <Bar>
                        <BarItem name="menu-icon">
                            <MenuButton onClick={this.props.handleMenuClick}/>
                        </BarItem>
                        <BarItem name="logo">
                            Anthony Hauger Photography
                        </BarItem>
                        <BarItem name="search-icon">
                            <SearchButton onClick={this.props.handleSearchClick}/>
                        </BarItem>
                        <BarItem name="search-box">
                            <SearchBox
                            searchVisibility={this.props.searchVisibility}
                            />
                        </BarItem>
                    </Bar>
                </div>
        );
    }
}

export default NavBar;
