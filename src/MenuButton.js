import React, { Component } from "react";
import menuButton from './images/Menu_Button.png';

class MenuButton extends Component {
    /*
     MenuButton is responsible for:
     1. Rendering the Menu Button at 15x15px
     2. Handling clicks on the Menu Button
     */
    render(){
        return(
               <div onClick={this.props.onClick}>
                    <img src={menuButton} alt="Menu Button" width="20px" height="20px" />
               </div>
        );
    }
}

export default MenuButton;
