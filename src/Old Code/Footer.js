import React, {Component} from 'react';

const footerStyle={
    width: "100%",
    backgroundColor: "RGBa(0,0,0,0.1)",
    textAlign:"center",
};

const footerLiStyle={
    display:"inline-block",
    color:"white",
    position:"absolute",
    top:"680px"
}

class Footer extends Component{
    render(){
        return(
               <div className="footer" style={footerStyle}>
                    <ul>
                        <li style={footerLiStyle}>This is where the footer goes</li>
                    </ul>
               </div>
        );
    }
}

export default Footer;
