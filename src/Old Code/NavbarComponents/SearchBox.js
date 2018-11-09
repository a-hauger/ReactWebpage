import React, { Component } from 'react';

const searchBoxShow={
width:"300px",
margin:"2px 0px 2px 0px",
color: "RGBa(255,255,255,0.3)",
borderRadius:"5px",
borderWidth:"2px",
backgroundColor: "RGBa(0,0,0,0.1)",
textAlign:"left",
};

const searchBoxHide={
width:"0px",
margin:"2px 0px 2px 0px",
color: "RGBa(255,255,255,0)",
borderRadius:"5px",
borderWidth:"2px",
backgroundColor: "RGBa(0,0,0,0)",
textAlign:"left",
};

class SearchBox extends Component {
    /*
     SearchBox is responsible for:
     1. Rendering the Search Box
     2. Showing/hiding the SearchBox on SearchButton click (in the NavBar component)
     */
    render(){
        let styleOption=searchBoxHide;
        
        if (this.props.searchVisibility){
            styleOption=searchBoxShow;
        }
        
        return(
               <div className="search-box" style={styleOption}>
               Search...
               </div>
        );
    }
}

export default SearchBox;
