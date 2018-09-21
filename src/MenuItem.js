import React, { Component } from 'react';

const menuItemStyle={
display:"block",
backgroundColor:"RGBa(0,0,0,0.1)"
};

class MenuItem extends Component {
    /*
     MenuItem is responsible for:
     1. Rendering its child elements (seen in SlidingMenu Component)
     */
    constructor(props){
        super(props);
        
        this.handleClick=this.handleClick.bind(this);
    }
    
    handleClick(e){
        this.props.changePage(this.props.name);
    }
    
    render(){
        return(
               <div onClick={this.handleClick} className="menu-item" style={menuItemStyle}>
                    {this.props.children}
               </div>
        );
    }
}

export default MenuItem;
