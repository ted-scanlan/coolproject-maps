import React from 'react';
import { View } from 'native-base';

import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';

import SearchBox from './searchbox'
import SearchResults from './searchResults'

import styles from "./MapContainerStyles.js";

export const MapContainer = ({region}) => {

 console.log(region)

  return(

    <View style={styles.container}>
    <MapView
    provider={ PROVIDER_GOOGLE }
    style = {styles.map}
    region={region}
    >
    <MapView.Marker
    coordinate={region}
    pinColor="blue"
    />
     </MapView>
     <SearchBox/>
     <SearchResults/>

    </View>



  )

}

export default MapContainer;
