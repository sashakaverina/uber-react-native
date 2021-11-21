import React from 'react'
import { View, Text, StyleSheet, SafeAreaView, Image } from 'react-native'
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import tw from 'tailwind-react-native-classnames';
import NavOptions from '../assets/components/NavOptions';
import { GOOGLE_MAPS_APIKEY } from '@env';
import { useDispatch } from 'react-redux';
import { setDestination, setOrigin } from '../slices/navSlice';
import NavFavorites from '../assets/components/NavFavorites';

const HomeScreen = () => {
  const dispatch = useDispatch();
  return (
    <SafeAreaView style={tw `bg-white h-full`}>
      <View style={tw `p-5`}>
        <Image 
          style={{
            width: 100,
            height: 100,
            resizeMode: "contain",
          }}
          source={require('../assets/logo.png')}
            />

          <GooglePlacesAutocomplete
          nearbyPlacesAPI="GooglePlacesSearch"
          debounce={400}
          placeholder="Where from?"
          onFail={error => console.error(error)}
          minLength={2}

          onPress={(data, details = null) => {
            dispatch(setOrigin({
              location: details.geometry.location,
              description: data.description
            }))
            dispatch(setDestination(null));

          }}
          fetchDetails={true}
          returnKeyType={"search"}
          enablePoweredByContainer={false}

          query={{
            key: GOOGLE_MAPS_APIKEY,
            language: 'en',

          }}
          
          styles={{container: {
            flex: 0,
          },
          textInput: {
            fontSize: 18,
          },
          }}

          
            
          />

          <NavOptions/>
          <NavFavorites/>
      </View>
    </SafeAreaView>
  )
}

export default HomeScreen

const styles = StyleSheet.create({

})
