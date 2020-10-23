import React from 'react'
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

const containerStyle = {
  width: '400px',
  height: '400px'
};
 
const center = {
  lat: 60.1699,
  lng: 25.9384
};
 
function MyComponent(props) {
  const [map, setMap] = React.useState(null)

  const onLoad = React.useCallback(function callback(map) {
    const bounds = new window.google.maps.LatLngBounds();
    map.fitBounds(bounds);
    setMap(map)
  }, [])
 
  const onUnmount = React.useCallback(function callback(map) {
    setMap(null)
  }, [])
 
  return (
    <LoadScript
      const REACT_APP_API_KEY = {process.env.REACT_APP_API_KEY}
    >
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={10}
        
      >
        { /* Child components, such as markers, info windows, etc. */ }
        <>
        <Marker position={{ lat: 11.111 , lng:22.222 }} key={1} title={"test"} />
        {console.log(props.chargers)}
        {props.chargers.map(charger => <Marker postion = {{lat: charger.AddressInfo.Latitude, lng: charger.AddressInfo.Longitude}} 
                                                          key = {charger.AddressInfo.ID} title={charger.name} {...charger}/>)}
        <Marker position={{ lat: 66.111 , lng:25.222 }} key={2} title={"test"} />
        </>
      </GoogleMap>
    </LoadScript>
  )
}
 
export default React.memo(MyComponent)