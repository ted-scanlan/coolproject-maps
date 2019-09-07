
import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { Container } from 'native-base';
import Geolocation from '@react-native-community/geolocation';

import MapContainer from './components/mapcontainer'




import Greeting from './components/Greeting';

import FetchLocation from './components/FetchLocation';

// Geolocation.setRNConfiguration(config);

// navigator.geolocation = require('@react-native-community/geolocation');


 export default class App extends Component {

   constructor(){
     super();
   this.state = {
     ready: false,
     Latitude: 0,
     Longitude: 0,
     error: null

     };
   }



    componentDidMount(){

      return fetch('https://maps.googleapis.com/maps/api/distancematrix/json?units=imperial&origins=Washington,DC&destinations=New+York+City,NY&key=AIzaSyCoaWQAbcunCXBFbD79q2xCRYtGv8-sQWE')
      .then( (response) => response.json() )
      .then( (responseJson) => {
        console.log(responseJson)


        this.setState({
          isLoading: false,
          dataSource: responseJson.movies,
        })

      });




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
       Latitude: position.coords.latitude,
       Longitude: position.coords.longitude
       })

   }
    geoFailure = (err) => {
   this.setState({error: err.message});

    }





render () {


  const region = {
    latitude: this.state.Latitude,
       longitude: this.state.Longitude,
      latitudeDelta: 0.015,
      longitudeDelta: 0.0121,
    }

console.log(region)
         // latitude: this.state.latitude,
         // longitude: this.state.longitude,


  return (

    <Container>

      <MapContainer region={region} />

    </Container>
  )
}
}
