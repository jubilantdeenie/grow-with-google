import React, { Component } from 'react';
import { withStyles } from 'material-ui/core/styles';
import Button from 'material-ui/core/Button';

import * as utils from '../utils'
import MapDataAPI from './MapDataAPI.js'
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
    },
    card: {
        maxWidth: 330,
    },
    media: {
        objectFit: 'cover'
    },
});

class SideBar extends Component {
    state = {
        photos_list: [],
        showingVenues: true,
        showingPictures: false
    }

    componentWillMount() {
        utils.getFourSquarePhotos('gallery').then(photos_list => {
            this.setState({photos_list });
        });
}

        render() {
            let displaySidebar = this.props.sidebarOpen ? "block" : "none";
            let { classes } = this.props;
        
            return (
                <section id="sidebar" style={{ display: displaySidebar  }}>
                    <div id="sidebar-inner">

        <p className="text-center">
        <Button variant="contained" color="primary" className={classes.button}
            onClick={() => {this.setState(state => ({ showingVenues : !state.showingVenues})) }}>
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
        

    <br/>

    <div ClassName="">
        {
        this.props.filtered && this.props.filtered.map((venue, key) => (
            <VenueCard key={key} venue={venue} li_clikc={this.props.li_click} liKeyEnter={this.props.liKeyEnter}/>
        ))
    }
</div>
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