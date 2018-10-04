import React, { Component } from "react";
//import './App.js'

export default class ListItem extends Component {
    render() {
        return (
            <li className="listItem">
            {this.props.venue.name} 
            <br></br>
            {this.props.venue.location.address} 
            </li>
            );
        }
    }

    {/*
     <img 
            src={
                this.props.categories[0].icon.prefix =
                "32" +
                this.props.categories[0].icon.suffix
                }
                alt={this.props.categories[0].name}/>
                }


            */ }