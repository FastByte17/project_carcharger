import React, { Component, useState } from 'react';
import { Map, InfoWindow, Marker, GoogleApiWrapper } from 'google-maps-react';
import SlowCharger from './SlowCharger';

const containerStyle = {
  display: 'block',
  width: '550px',
  height: '400px',
  marginLeft: 'auto',
  marginRight: 'auto',
  border: '1px solid black',
  position: 'relative'
}

export class MapContainer extends Component {
  constructor(props) {
    super(props);
  }
  
  state = {
    showingInfoWindow: false,
    activeMarker: {},
    selectedMarker: {}
  }

  onMarkerClick = (parameter, marker, e) =>
    this.setState({
      selectedPlace: parameter,
      activeMarker: marker,
      showingInfoWindow: true
    });

  onMapClicked = (props) => {
    if (this.state.showingInfoWindow) {
      this.setState({
        showingInfoWindow: false,
        activeMarker: null
      })
    }
  };


  render() {

    return (
      <Map google={this.props.google} zoom={4} containerStyle={containerStyle}
        onClick={this.onMapClick} initialCenter={{ lat: 60.190084, lng: 24.936878 }}>
        
        {this.props.charging_locations.map(chargers => <Marker onClick={this.onMarkerClick} position={{ lat: chargers.AddressInfo.Latitude,
         lng: chargers.AddressInfo.Longitude }} key={chargers.AddressInfo.ID} title={chargers.name} name={chargers.AddressInfo.Title} address={chargers.AddressInfo.AddressLine1}
         price={chargers.UsageCost}> </Marker>)}

        <InfoWindow marker={this.state.activeMarker} visible={this.state.showingInfoWindow}>
          <div>
        <h1>Name: {this.state.activeMarker.name}</h1>
        <p>Address: {this.state.activeMarker.address}</p>
        <p>Price: {this.state.activeMarker.price}</p>
          </div>
        </InfoWindow>


        <SlowCharger />

      </Map>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: (process.env.REACT_APP_API_KEY)
})(MapContainer)