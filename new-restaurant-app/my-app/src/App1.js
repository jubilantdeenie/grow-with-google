import React, { Component } from 'react';
import axios from 'axios'
import './App.css';

import SideBar from './components/SideBar.js';
//import InfoModal from './components.InfoModal'
//import NavBar from './components.NavBar'
//import MapDiv from './components.Map'


class App extends Component {
  
  state= {
    venues:[]
  }
  
  componentDidMount() {
    this.getVenues()
  }
  
  loadMap = () => {
    loadScript("https://maps.googleapis.com/maps/api/js?AIzaSyACxrm7b9GlF8v5fcTtl-VkSxXlM9Y5BcE&v=3.33&callback=initMap")
    window.initMap = this.initMap
  }

  getVenues = () => {
    const endPoint = "https://api.foursquare.com/v2/venues/explore?"
    const parameters = {
      client_id: "DQRJIJMNVX5GBIN1C4F5FJOREDG2TKEJTF5IXVYJSV41EQTW",
      client_secret: "BZPWNB5SJMCO0XYUFI3WDBC0F5AUP11VCLINDFWJFXPJBMSC",
      query: "gluten-free",
      near: "Portland",
      v: "20180708"
    }

    axios.get(endPoint + new URLSearchParams(parameters))
     .then(response => {
       this.setState({
         venues: response.data.response.groups[0].items
        }, this.loadMap())
     })
     .catch(error => {
       console.log("Error!" + error)
     })

    }
//Create Map
  initMap = () => {
    var map = new window.google.maps.Map(document.getElementById('map'), {
      center: {lat: 45.5122308, lng: -122.6587185},
      zoom: 12
    })
  
  // Create Info Window
    var infowindow = new window.google.maps.InfoWindow()
  
  // Display Dynamic Markers
    this.state.venues.map(myVenue => {

      var contentString = myVenue.venue.name  
    
// Create Marker
      var marker = new window.google.maps.Marker({
        position: {lat: myVenue.venue.location.lat, lng: myVenue.venue.location.lng},
        map: map,
        title: myVenue.venue.name
      })

// When Marker Is Clicked
      marker.addListener('click', function() {
       
        // Change Content
       infowindow.setContent(contentString)

        // Open Info Window
       infowindow.open(map, marker)

       // Open SideBar
       //this.setState.sideBarOpen
       this.SideBar.props.setState({sidebarOpen: true});
      })
      
  })

}


filterVenues(query) {
  let f = query ? this.venues.filter(v => v.name.tolovercase().includes(query)) : this.venues;
  this.marker.forEach(m => {
    m.name.toLowerCase().includes(query) ?
    m.setVisible(true) :
    m.setVisible(false);
  });
  this.setState({ filtered: f, query: query});
}

menuKeyEnter(event) {
  var code = event.keyCode || event.which;
  if(code === 13) {
    this.toggleSideBar();
  }
}

liKeyEnter(event, venue) {
  var code = event.keyCode || event.which;
  if(code === 13) {
    this.li_click(venue);
  }
}



  
  render() {
    
      let displaySidebar = (this.state.sidebarOpen ? 'block' : 'none');
      let menuText= this.state.sidebarOpen ? "Close" : "Open";
    
      return (      
      <div id="app-container">
  
     <SideBar 
        menuText={menuText}
        //foursquareData={this.state.foursquareData}
        query={this.state.query}
        filtered={this.state.filtered}
        sidebarOpen={this.state.sidebarOpen}
        toggleSideBar={this.toggleSideBar}
        liKeyEnter={this.liKeyEnter}
        filterVenues={this.filterVenues}
        li_click={this.li_click}
        liKeyEnter={this.liKeyEnter}
        handleShow={this.handleShow}
        displaySidebar={displaySidebar} />


      <main>
      <div id="map"></div> 
      </main>
      </div>
    );
  }
}

function loadScript(url) {
  var index = window.document.getElementsByTagName('script')[0]
  var script = window.document.createElement('script')
  script.src = url
  script.async = true
  script.defer = true
  index.parentNode.insertBefore(script, index)
}

export default App;

{
 /* <main>
    <div id="map"></div> 
  </main>

*/

}