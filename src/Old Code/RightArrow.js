import React, { Component } from 'react';
import rightArrow from '../images/RightArrow.png';

class RightArrow extends Component{
    constructor(props){
        super(props);
        
        this.state={ position:"fixed", right:"0px", top:"40%", position:"absolute"};
    }
    render(){
        return(
               <div className="rightArrow" onClick={this.props.goTo} style={this.state}>
               <img src={rightArrow} />
               </div>
        );
    }
}

export default RightArrow;
