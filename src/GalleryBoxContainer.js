import React, { Component } from 'react';
import GalleryBox from './GalleryBox.js';
import buffalo from './images/Buffalo.jpg';

class GalleryBoxContainer extends Component{
	constructor(props){
		super(props);

		this.state={
        width:"100%",
        backgroundColor:"white"
		}
	}

	render(){
		return(
            <div style={this.state}>
               <GalleryBox onClick={this.props.changePage}>{buffalo}</GalleryBox>
               <GalleryBox onClick={this.props.changePage}>{buffalo}</GalleryBox>
               <GalleryBox onClick={this.props.changePage}>{buffalo}</GalleryBox>
               <GalleryBox onClick={this.props.changePage}>{buffalo}</GalleryBox>
			</div>
		);
	}
}

export default GalleryBoxContainer;
