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

      console.log(this.state.venues)

// When Marker Is Clicked
      marker.addListener('click', function() {
       
        // Change Content
       infowindow.setContent(contentString)

        // Open Info Window
       infowindow.open(map, marker)
       
       

      })

      {/*closeAllMarkers = () => {
        const markers = this.state.markers.map(marker => {
          marker.isOpen = false;
          return marker;
        });
        this.setState({ places: Object.assign(this.state.markers, markers)} );
      };*/}
  

     {/*} handleListItemClick = venue => {
        console.log(venue)
      } */}

   
{/*}
      handleMarkerClick = marker => {
          this.closeAllMarkers();
          marker.isOpen = true;
          this.setState({ markers: Object.assign(this.state.places, marker) });
          const venue = this.state.venues.find(venue => venue.id === marker.id);


          myVenue.getVenueDetails(marker.id).then(res => {
              const newVenue = Object.assign(venue, res.response.venue);
              this.setState({ venues: Object.assign(this.state.venues, newVenue) });
          
          console.log(newVenue);
          }); 
      };    */ } 
  })

}

render() {    
  return (  
  <main>   
      <SideBar {...this.state} />
  <div id="map"{...this.state}>      
  </div>  
    </main>     
);
}
}
  
{ /* render() {    
      return (  
      <main>   
          <SideBar {...this.state} handleListItemClick= {this.handleListItemClick} />
      <div id="map"{...this.state} handleMarkerClick= {this.handleMarkerClick}>      
      </div>  
        </main>     
    );
  } */ }


function loadScript(url) {
  var index = window.document.getElementsByTagName('script')[0]
  var script = window.document.createElement('script')
  script.src = url
  script.async = true
  script.defer = true
  index.parentNode.insertBefore(script, index)
}

export default App;

