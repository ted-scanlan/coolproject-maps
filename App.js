
import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import Geolocation from '@react-native-community/geolocation';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';


import Greeting from './components/Greeting';

import FetchLocation from './components/FetchLocation';

// Geolocation.setRNConfiguration(config);

// navigator.geolocation = require('@react-native-community/geolocation');


 export default class App extends Component {

   constructor(){
     super();
   this.state ={
     ready: false,
     where: {lat:null, lng:null},
     error: null

     };
   }
   componentDidMount(){
     let geoOptions = {
        enableHighAccuracy: true,
        timeOut: 20000,
      maximumAge: 60 * 60 * 24
    };
    this.setState({ready:false, error: null});
    Geolocation.getCurrentPosition( this.geoSuccess, this.geofailure, geoOptions);

   }
   geoSuccess = (position) => {
     console.log(position)
     this.setState({
       ready:true,
       where: {lat:
       position.coords.latitude,lng:position.coords.longitude }
       })

   }
   geoFailure = (err) => {
     this.setState({error: err.message});

   }




render () {

  return (
   <View style={styles.container}>
     <MapView
       provider={PROVIDER_GOOGLE} // remove if not using Google Maps
       style={styles.map}
       region={{
         latitude: 51.509865,
         longitude: -0.118092,
         latitudeDelta: 0.015,
         longitudeDelta: 0.0121,
       }}
     >
     <MapView.Marker
     coordinate={region}
     pinColor="blue"
     /> 
     </MapView>

     { !this.state.ready && (
       <Text style={styles.big}> Using Geolocation in React
               </Text>
       )}
       { this.state.error && (
         <Text style={styles.big}> { this.state.error}
                 </Text>

         )}
         {
           this.state.ready && (
             <Text style={styles.big}> {
               `Latitude: ${this.state.where.lat}
               Longitute: ${this.state.where.lng}`
             }</Text>

             )}
   </View>
);

}
}





const styles = StyleSheet.create({
 container: {
   ...StyleSheet.absoluteFillObject,
   height: 400,
   width: 400,
   justifyContent: 'flex-end',
   alignItems: 'center',
 },
 map: {
   ...StyleSheet.absoluteFillObject,
 },
});





// export default class App extends Component {
//
//   // state ={
//   //   location: null
//   // };
//   //
//   //
//   //
//   // getUserLocationHandler = () => {
//   //
//   //   Geolocation.getCurrentPosition(
//   //     position => {
//   //
//   //        const location = JSON.stringify(position);
//   //
//   //
//   //         this.setState({ location });
//   //     },
//   //     error => Alert.alert(error.message),
//   //     { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 }
//   //   );
//   //
//   //
//   // }
//   render() {
//     return (
//       <View style={styles.container}>
//       <MapView
//       provider={PROVIDER_GOOGLE}
//       style={styles.map}
//     initialRegion={{
//       latitude: 37.78825,
//       longitude: -122.4324,
//       latitudeDelta: 0.0922,
//       longitudeDelta: 0.0421,
//     }}
// >
//  </MapView>
//       // <View style={{alignItems: 'center', top: 50}}>
//       //
//       //
//       //   <Greeting name='Rexxar' />
//       //   <Greeting name='Jaina' />
//       //   <Greeting name='Valeera' />
//       //   <FetchLocation onGetLocation={this.getUserLocationHandler} />
//       //   <TouchableOpacity onPress={this.getUserLocationHandler}>
//       //   <Text> Location: {this.state.location}</Text>
//       //    </TouchableOpacity>
//        </View>
//     );
//   }
// }
//
// const styles = StyleSheet.create({
//  container: {
//    ...StyleSheet.absoluteFillObject,
//    height: 400,
//    width: 400,
//    justifyContent: 'flex-end',
//    alignItems: 'center',
//  },
//  map: {
//    ...StyleSheet.absoluteFillObject,
//  },
// });
