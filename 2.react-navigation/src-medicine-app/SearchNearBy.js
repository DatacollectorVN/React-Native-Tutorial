import React from 'react'
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, FlatList, TouchableOpacity } from 'react-native';
import * as Permissions from 'expo-permissions';
import * as Location from 'expo-location';
export default class SearchNearBy extends React.Component {

  state = { 
    hasLocationPermission: false,
    latitude: 0,
    longitude: 0,
    restaurantList: []
  }

  componentDidMount() {
    this.getLocationAsync();
  }

  async getLocationAsync () {
    const { status } = await Permissions.askAsync(
      Permissions.LOCATION
    );
    if (status === 'granted') {
      let location = await Location.getCurrentPositionAsync({});
      this.setState({
        hasLocationPermissions: true,
        latitude: location.coords.latitude,
        longitude: location.coords.longitude,
      });
    } else {
      alert('Location permission not granted');
    }
  };

  styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });

  handleHospitalSearch = () => {
    console.log("here")
    const url  = 'https://maps.googleapis.com/maps/api/place/nearbysearch/json?'
    const location = `location=${this.state.latitude},${this.state.longitude}`;
    const radius = '&radius=1000';
    const type = '&type=hospital';
    const key = '&key=AIzaSyBkoAcdFhQhPeG9haVVBEMkCzWo9Pldh1U';
    const hospitalSearchUrl = url + location + radius + type + key;
    console.log(hospitalSearchUrl)
    fetch(hospitalSearchUrl)
      .then(response => response.json())
      .then(result => this.setState({restaurantList: result}))
      .catch( e => console.log(e))
  }

  render() {
    console.log(this.state.restaurantList.results)
    return (
      <View style={this.styles.container}>
        <FlatList  
          data={this.state.restaurantList.results}
          keyExtractor={(item) => item.place_id}
          renderItem={({item}) => (
            <Text>{item.name}</Text>
          )}
          style={{backgroundColor: 'grey', width: '80%', margin: 60, padding: 5}}
        />
        <Text>{this.state.latitude} and {this.state.longitude}</Text>
        <TouchableOpacity onPress={() => this.handleHospitalSearch()}>
          <Text style={{backgroundColor: 'grey', color: 'white', padding: 20, marginBottom: 50}}>Search Hospitals</Text>
        </TouchableOpacity>
        <StatusBar style="auto" />
      </View>
    );
  }
}