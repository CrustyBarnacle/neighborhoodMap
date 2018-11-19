import React, { Component } from "react";
import { Map } from "google-maps-react";

class myMap extends React.Component {
  state = {
    zoom: 14,
    lat: 37.774929,
    lng: -122.419416
  };

  loadMap() {
    const { google } = this.props;
    const mapRef = this.refs.map;

    this.map = new google.maps.Map(ReactDOM.findDOMNode(mapRef), {
      center: this.state.center,
      zoom: this.state.zoom
    });
  }

  render() {
    return <div ref="map">Loading map...</div>;
  }
}

export default Map;
