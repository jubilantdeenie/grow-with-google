import React, { Component } from 'react';
import { withStyles } from 'material-ui/core/styles';
import Button from 'material-ui/core/Button';

import * as utils from '../utils'
import RenderToLayer from 'material-ui/internal/RenderToLayer';

const styles = theme => ({



});

class SideBar extends Component {

Render() {
   
    let displaySidebar = this.props.sidebarOpen ? "block" : "none";
    let { classes } = this.props;

    return(
        <section id="sidebar" style={{ display: displaySidebary }}>
            <div id="sidebar-inner">
             </div>
        </section>
    );


}

}

export default withStyles(styles)(SideBar);