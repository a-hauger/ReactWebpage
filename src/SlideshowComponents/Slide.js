import React, { Component } from 'react';

import picture1 from '../images/Buffalo.jpg';
import picture2 from '../images/Yellowstone.jpg';
import picture3 from './UpMyNose.jpg';

class Slide extends Component{
    /*constructor(props){
        super(props);
        
        this.state={
            display:"inline-block"
        };
    }*/
	render(){
        //let url = this.props.url;

        return(
            <div className="slide">
               <img src={picture1} width="20%"/>
            </ div>
        );
	}
}

export default Slide;

