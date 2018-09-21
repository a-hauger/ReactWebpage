import React, { Component } from 'react';

class Slide extends Component{
	constructor(props){
		super(props);

		this.state={
            backgroundImage: "url(../images/"+this.props.image+".jpg)",
            backgroundsize: 'cover',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: '50% 60%',
        }
	}

	render(){
		return(
               <div className="slide" style={this.state}>

			</div>
		);
	}
}

export default Slide;
