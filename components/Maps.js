// import React from "react";
import React, {useState,useEffect} from 'react';
import { StyleSheet, Text, View,PermissionsAndroid } from "react-native";
import MapView from "react-native-maps";
import { Marker } from 'react-native-maps';

const Maps =()=> {
    async function requestGeolocationPermission() {
        try {
          const granted = await PermissionsAndroid.request(
            PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
            {
              'title': 'Ridesharer Geolocation Permission',
              'message': 'Ridesharer needs access to your current location so you can share or search for a ride'
            });
          if (granted === PermissionsAndroid.RESULTS.GRANTED) {
            console.log("You can use the geolocation")
          } else {
            console.log("Geolocation permission denied")
          }
        } catch (err) {
          console.warn(err)
        }
      }
      requestGeolocationPermission();
//   return (
//     <View style={styles.container}>
//     {/*Render our MapView*/}
//       <MapView
//         style={styles.map}
//         //specify our coordinates.
//         initialRegion={{
//           latitude: 37.78825,
//           longitude: -122.4324,
//           latitudeDelta: 0.0922,
//           longitudeDelta: 0.0421,
//         }}
//       />
//     </View>
//   );
// }
// //create our styling code:
const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    flex: 1, //the container will fill the whole screen.
    justifyContent: "flex-end",
    alignItems: "center",
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
});
const [region, setRegion] =useState({
    latitude: 51.5079145,
    longitude: -0.0899163,
    latitudeDelta: 0.01,
    longitudeDelta: 0.01,
  });
  return (
    <View style={styles.container}>
      <MapView zoomControlEnabled={true}
  showsCompass={true}
      showsUserLocation={true}
  
        style={styles.map}
        initialRegion={{
          latitude: 37.78825,
          longitude: -122.4324,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
        //onRegionChangeComplete runs when the user stops dragging MapView
        onRegionChangeComplete={(region) => setRegion(region)}>
            <Marker
            coordinate={{ latitude: 37.78825, longitude: -122.4324 }}
            title={"Marker Title"}
            description={"Marker Description Text"}
          />
        </MapView>
      
      {/*Display user's current region:*/}
      <Text style={styles.text}>Current latitude: {region.latitude}</Text>
      <Text style={styles.text}>Current longitude: {region.longitude}</Text>
    </View>
  );
    }  
    export default Maps;