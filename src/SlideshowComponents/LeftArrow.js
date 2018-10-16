import React, { Component } from 'react';
import leftArrow from '../images/LeftArrow.png';

class LeftArrow extends Component{
    constructor(props){
        super(props);
        
        this.state={ position:"fixed", left:"0px", top:"40%", position:"absolute"};
    }
    render(){
        return(
               <div className="leftArrow" onClick={this.props.goTo} style={this.state}>
               <img src={leftArrow} />
               </div>
        )
    }
}

export default LeftArrow;
