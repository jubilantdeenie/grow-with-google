import React, { Component } from 'react';
import { withStyles } from 'material-ui/core/styles';
import Button from 'material-ui/core/Button';

import * as utils from '../utils'
//import RenderToLayer from 'material-ui/internal/RenderToLayer';
//import { FloatingActionButton } from 'material-ui';

const styles = theme => ({
    button: {
        margin: theme.spacing.unit,
    },
    input: {
        display: 'none',
    },
    paper: {
        width: theme.spacing.unit * 50,
        backgroundColor: theme.palette.background.paper,
        maxWidth: '95%'
    }
});

class SideBar extends Component {
    state = {
        photos_list: [],
        showingVenues: true,
        showingPictures: false
    }

    componentWillMount() {
        // add setState for photo_list
}

render() {
    let displaySidebar = this.props.sidebarOpen ? "block" : "none";
    let { classes } = this.props;

    return (
        <section id="sidebar" style={{ display: displaySidebar  }}>
            <div id="sidebar-inner">
                { this.props.foursquareData && 
                <p className="text-center">
                    <Button variant="contained" color="primary" className={classes.button} onClick={this.props.handleShow}>
                     Info
                    </Button>
                </p>    
                }

                <p className="text-center">
                <Button variant="contained" color="primary" className={classes.button}
                    onClick{() => {this.setState(state => ({ showingVenues : !state.showingVenues})) }}>
                    { this.state.showingVenues ? 'Hide' : 'Show'} Venues
                </Button>
                </p>
                
                
                <p className="text-center">
                    <Button variant="contained" color="primary" className={classes.button}>
                    on-click={() => { this.setState( state => ({ showingPictures : !showingPictures })) }}>
                    { this.state.showingPictures ? 'Hide' : 'Show'} Photos
                    </Button>
                </p>

            {
                this.state.showingVenues && 
                <div>
                    <input className="transition middlr input-s1" placeholder="Filter Venues"
                        value={this.props.query} onChange={(e) => {this.props.filterVenues(e.target.value) }} />
                    <ul id="places-list"></ul>
            {
                this.props.filtered && this.props.filtered.map((venue, key) => (
                    <li tabIndex="0" className="transition" title={ venue.name }
                    <h5><strong>
                    <span className="venue-name"
                     onClick={() => {window.open(/*add venue web*/)}}
                     onKeyPress={(even) => { this.linkspanKeyEnter(event, venue) }}>
                        { venue.name }
                    </span>
                    </strong></h5>
                    </p>  
                     {
                        venue.location.formattedAddress.map((value.index) => {
                            return index === (venue.location.formattedAddress.length -1) ?
                            <span key={index}><span>{value}</span><br/></span>)
                        })
                    }
                    </p>
                    <p>{ venue.hereNow.summary</p>
                    <img className="venuePhoto" src={/* insert*/ } alt= {venue.name }
                </li>
                })
            }
        </ul>
    </div>
}

<br/>

    </div>
</section>
);
}
}

export default withStyles(styles)(SideBar);

  
   { /*let displaySidebar = this.props.sidebarOpen ? "block" : "none";
    let { classes } = this.props;

    return(
        <section id="sidebar" style={{ display: displaySidebary }}>
            <div id="sidebar-inner">
             </div>
        </section>
    ); */}