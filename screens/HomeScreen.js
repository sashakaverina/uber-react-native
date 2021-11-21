import React from 'react'
import { View, Text, StyleSheet, SafeAreaView, Image } from 'react-native'
import tw from 'tailwind-react-native-classnames';


const HomeScreen = () => {
  return (
    <SafeAreaView style={tw `bg-white h-full`}>
      <View style={tw `p-3`}>
        <Image 
          style={{
            width: 100,
            height: 100,
            resizeMode: "contain",
          }}
          source={require('../assets/logo.png')}
            />
      </View>
    </SafeAreaView>
  )
}

export default HomeScreen

const styles = StyleSheet.create({

})
