    import React, { Component } from 'react';
    import VenueList from './VenueList';
    
    export default class SideBar extends Component {

    constructor() {
        super();
        this.state = {
            query: ""
        };
    }

//handleFilterVenues = () => {};

handleChange = e => {
    this.setState({query: e.target.value});
    const markers = this.props.venues.map(venue => {
        //console.log(" THIS IS THE " + this.props.venues);
        const isMatched = marker.name
        .toLowerCase()
        .includes(e.target.value.toLowerCase());
        const marker = this.props.markers.find(marker => marker.id === venue.id);
        if(isMatched) {
            marker.isVisible = true;
        }else{
            marker.isVisible = false;
        }
        
        return marker;
    });
    this.props.updateSuperState({ markers });
};

       render() {
        return (<div className="sideBar">
            <input type={'search'} id={'search'} placeholder={'Filter Venues'} onChange={this.handleChange}/>
            <VenueList {...this.props} myVenue= {this.props.myVenue} />
           
        </div>
        );
       }
    }

    { /*
    */ }

{ /* 
<VenueList {...this.props} myVenue= {this.props.myVenue} />
*/
}


{ /* constructor() {
    super();
    this.state = {
        query: ""
    
    };
}


handleFilterVenues = () => {
    if(this.state.query.trim() === "") {
        const venues = this.props.venues.filter(venue =>
        venue.name.toLowerCase().includes(state.query.toLowerCase())
        );
        return venues;
    }
    return this.props.venues
};

handleChange = e => {
    this.setState({query: e.target.value});
    const markers = this.props.venues.map(venue => {
        //console.log(" THIS IS THE " + this.props.venues);
        const isMatched = venue.name
        .toLowerCase()
        .includes(e.target.value.toLowerCase());
        const marker = this.props.markers.find(marker => marker.id === venue.id);
        if(isMatched) {
            marker.isVisible = true;
        }else{
            marker.isVisible = false;
        }
        
        return marker;
    });
    this.props.updateSuperState({markers});
}; 

filterVenues(query) {
    let f = query ? this.venues.filter(v => v.name.toLowercase().includes(query)) : this.venues;
    this.marker.forEach(m => {
      m.name.toLowerCase().includes(query) ?
      m.setVisible(true) :
      m.setVisible(false);
    });
    this.setState({ filtered: f, query: query});
  }






*/ }
