import React, { Component } from 'react';
import rightArrow from '../images/RightArrow.png';

class RightArrow extends Component{
    constructor(props){
        super(props);
        
        this.state={};
    }
    render(){
        return(
               <div className="rightArrow" onClick={this.props.goTo} style={{right:"0px"}}>
               <img src={rightArrow} />
               </div>
        );
    }
}

export default RightArrow;
