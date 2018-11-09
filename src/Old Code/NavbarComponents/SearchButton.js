import React, { Component } from 'react';
import searchButton from '../images/Search_Button.png';

class SearchButton extends Component {
    /*
     SearchButton is responsible for:
     1. Rendering the Search Button at 15x15px
     2. Handling Clicks on the Search Button
     */
    render(){
        return(
               <div onClick={this.props.onClick}>
               <img src={searchButton} alt="Search Button" width="20px" height="20px" />
               </div>
        );
    }
}

export default SearchButton;
