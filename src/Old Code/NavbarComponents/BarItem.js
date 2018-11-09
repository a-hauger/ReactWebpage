import React, { Component } from 'react';

const navBarItemStyle={
display:"inline-block",
margin:"0px 10px 0px 0px"
};

class BarItem extends Component {
    /*
     BarItem is responsible for:
     1. Rendering its children (seen in NavBar Component)
     */
    render(){
        return(
               <div className="bar-item" style={navBarItemStyle}>
                    {this.props.children}
               </div>
        );
    }
}

export default BarItem;
