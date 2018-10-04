import React, { Component } from 'react';
import VenueList from './VenueList';

export default class SideBar extends Component {

    handleChange = e => {
        
    }

   render(){
    return (<div className="sideBar">
        <input type={'search'} id={'search'} placeholder={'Filter Venues'} />
        <VenueList {...this.props} />
    </div>
    );
   }
}

{ /* 
<VenueList {...this.props} handleListItemClick= {this.props.handleListItemClick} />
*/
}