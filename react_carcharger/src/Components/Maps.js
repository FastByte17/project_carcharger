import React, { Component } from 'react';
import { Map, InfoWindow, Marker, GoogleApiWrapper } from 'google-maps-react';


const containerStyle = {
  width: '50%',
  height: '400px'
}

export class MapContainer extends Component {

  render() {

    return (
      <Map google={this.props.google} zoom={4} containerStyle={containerStyle}
        initialCenter={{ lat: 60.190084, lng: 24.936878 }}>

        {this.props.charging_locations.map(chargers => <Marker position={{ lat: chargers.AddressInfo.Latitude, lng: chargers.AddressInfo.Longitude }}
          key={chargers.AddressInfo.ID} title={chargers.name}> </Marker>)}


        
        
      </Map>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: (process.env.REACT_APP_API_KEY)
})(MapContainer)