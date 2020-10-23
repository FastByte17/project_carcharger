import React from 'react'
import { GoogleMap, LoadScript } from '@react-google-maps/api';


const containerStyle = {
  width: '400px',
  height: '400px'
};
 
const center = {
  lat: 65.0121,
  lng: 25.4651
};
 
function MyComponent() {
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
      {console.log(center)};
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={{lat: 65.0121,
                lng: 25.4651}}
        zoom={10}
        onLoad={onLoad}
        onUnmount={onUnmount}
      >
        { /* Child components, such as markers, info windows, etc. */ }
        <></>
      </GoogleMap>
    </LoadScript>
  )
}
 
export default React.memo(MyComponent)