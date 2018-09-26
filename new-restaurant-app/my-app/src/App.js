import React, { Component } from 'react';
import axios from 'axios'
import './App.css';

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

  initMap = () => {
    var map = new window.google.maps.Map(document.getElementById('map'), {
      center: {lat: 45.5122308, lng: -122.6587185},
      zoom: 8
    })
  

    this.state.venues.map(myVenue => {

    var maker = new window.google.maps.Marker({
      position: {lat: myVenue.venue.location.lat, lng: myVenue.venue.location.lng},
      map: map,
      title: myVenue.venue.name
    });

  })

}
  
  render() {
    return (
      <main>
        <div id="map"></div>
      </main>
      
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
