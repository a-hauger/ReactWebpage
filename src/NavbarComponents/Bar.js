import React, { Component } from 'react';

const navBarLiStyle={
margin:"20px",
color:"white"
};

class Bar extends Component {
    /*
     Bar is responsible for:
     1. Rendering its children, BarItem (seen in NavBar Component)
     */
    render(){
        return(
               <div className="bar" style={navBarLiStyle}>
                    <div>
                        {this.props.children}
                    </div>
               </div>
        );
    }
}

export default Bar;
