import React, { Component } from 'react';
import {Map, Marker, GoogleApiWrapper} from 'google-maps-react';
import { render } from '@testing-library/react';
export default GoogleApiWrapper({
  apiKey: (process.env.REACT_APP_API_KEY)
})(MapContainer)

function MapContainer (props) {

  const containerStyle = {
    position: 'relative',
    width: '400px',
    height: '400px'
  }

  return (
    <Map google={props.google} zoom={5} containerStyle={containerStyle}
                initialCenter = {{ lat: 60.190084, lng: 24.936878 }}>
        
      <Marker name={'Current location'} />
        
      {props.chargers.map(charger => <Marker postion = {{lat: charger.AddressInfo.Latitude, lng: charger.AddressInfo.Longitude}} 
                                                key = {charger.AddressInfo.ID} title={charger.name} {...charger}/>)}
      </Map>
  );
}