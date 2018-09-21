import React, { Component } from 'react';

const menuLiStyle={
color:"white"
}

class Menu extends Component {
    /*
     Menu is responsible for:
     1. Rendering its children, MenuItems (seen in SlidingMenu Component)
    */
    render(){
        return(
               <div className="menu" style={menuLiStyle}>
                    <div>
                        {this.props.children}
                    </div>
               </div>
        );
    }
}

export default Menu;
