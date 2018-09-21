import React, { Component } from 'react';
import leftArrow from '../images/LeftArrow.png';
class LeftArrow extends Component{
    constructor(props){
        super(props);
        
        this.state={};
    }
    render(){
        return(
               <div className="leftArrow" onClick={this.props.goTo}>
               <img src={leftArrow} />
               </div>
        );
    }
}

export default LeftArrow;
