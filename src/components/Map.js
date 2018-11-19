import React, { Component } from "react";

class Map extends React.Component {
  state = {
    zoom: 14,
    center: {
      lat: 37.774929,
      lng: -122.419416
    }
  };

  loadMap() {
    const { google } = this.props;
    const mapRef = this.refs.map;

    this.map = new google.maps.Map(ReactDOM.findDOMNode(mapRef), {
      center: center,
      zoom: zoom
    });
  }

  render() {
    return <div ref="map">Loading map...</div>;
  }
}

export default Map;
