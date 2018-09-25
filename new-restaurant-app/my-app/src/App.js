import React, { Component } from 'react';
import axios from 'axios'
import './App.css';

class App extends Component {
  
  componentDidMount() {
    this.loadMap()
  }
  
  loadMap = () => {
    loadScript("https://maps.googleapis.com/maps/api/js?AIzaSyACxrm7b9GlF8v5fcTtl-VkSxXlM9Y5BcE&v=3.33&callback=initMap")
    window.initMap = this.initMap
  }

  getVenues = () => {
    const endPoint = this.initMap
    const parameters = {
      client_id: "DQRJIJMNVX5GBIN1C4F5FJOREDG2TKEJTF5IXVYJSV41EQTW",
      client_secret: "BZPWNB5SJMCO0XYUFI3WDBC0F5AUP11VCLINDFWJFXPJBMSC",
      query: "food",
      near: "Portland"
    }

    axios.get(endPoint + new URLSearchParams(parameters))
     .then(response => {
       console.log(response)
     })
     .catch(error => {
       console.log("Error! + error")
     })

    }

  initMap = () => {
    var map = new window.google.maps.Map(document.getElementById('map'), {
      center: {lat: -34.397, lng: 150.644},
      zoom: 8
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
