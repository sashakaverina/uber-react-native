import React from 'react';
import { View, Text, SafeAreaView, StyleSheet, KeyboardAvoidingView } from 'react-native';
import tw from 'tailwind-react-native-classnames';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import "react-native-google-places-autocomplete";
import { GOOGLE_MAPS_APIKEY} from "@env";
import { useDispatch } from 'react-redux';
import { setDestination } from '../../slices/navSlice';
import { useNavigation } from '@react-navigation/native';
import RideOptionsCard from './RideOptionsCard';


const NavigateCard = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();

  return (
    <SafeAreaView style={tw `bg-white flex-1`}>
      <View style={tw `border-r border-gray-200 flex-shrink`}>
         <View>
           <GooglePlacesAutocomplete
           styles={toInputBoxStyles}
           placeholder="Where to?"
           debounce={400}
           minLength={2}
           fetchDetails={true}
           returnKeyType={"search"}
           onPress={(data, details = null) => {
             dispatch(setDestination({
               location: details.geometry.location,
               description: data.description,
             })
             );
             navigation.navigate('RideOptionsCard')
           }}
           query={{
             key: GOOGLE_MAPS_APIKEY,
             language: 'en',
           }}
           nearbyPlacesAPI="GooglePlacesSearch"
           enablePoweredByContainer={false}
           />
         </View>
      </View>
    </SafeAreaView>
  )
}

export default NavigateCard;

const toInputBoxStyles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    paddingTop: 20,
    flex: 0,
  },
  textInput: {
    backgroundColor: "#DDDDDF",
    borderRadius: 0,
    fontSize: 18,
  },
  textInputContainer: {
    paddingHorizontal: 20,
    paddingBottom: 0,
  }
})
