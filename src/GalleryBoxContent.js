import React, { Component } from 'react';

class GalleryBoxContents extends Component {
    constructor(props){
        super(props);
        
        this.state={

        };
    }
    
	render(){
		return(
               <div style={this.props.state} onClick={this.props.onClick} display="block">
               <img src={this.props.children} display="block" height="250px"/>
			</div>
		);
	}
}

export default GalleryBoxContents;
