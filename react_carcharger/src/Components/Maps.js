import React, { Component } from 'react';
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

  render() {

    return (
      <Map google={this.props.google} zoom={4} containerStyle={containerStyle}
        initialCenter={{ lat: 60.190084, lng: 24.936878 }}>
        {this.props.charging_locations.map(chargers => <Marker position={{ lat: chargers.AddressInfo.Latitude, lng: chargers.AddressInfo.Longitude }}
          key={chargers.AddressInfo.ID} title={chargers.name}> </Marker>)}

        


        <SlowCharger />

      </Map>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: (process.env.REACT_APP_API_KEY)
})(MapContainer)