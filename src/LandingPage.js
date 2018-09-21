import React, { Component } from 'react';
import background from './images/UpMyNose.jpg';

class LandingPage extends Component {
    constructor(props){
        super(props);
        
        this.state={
            position: "fixed",
            top:"0px",
            backgroundImage: "url("+background+")",
            backgroundRepeat:"no-repeat",
            backgroundPosition:"center",
            backgroundSize:"cover",
            width:"100%",
            height:"718px"
        };
    }
    
    render() {
        return(
               <div >
               <section style = {this.state}>
               </section>
               </div>
               );
    }
}

export default LandingPage;

