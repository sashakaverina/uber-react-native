import { createStackNavigator } from '@react-navigation/stack';
import React from 'react'
import { View, Text } from 'react-native';
import tw from 'tailwind-react-native-classnames';
import Map from '../assets/components/Map';
import NavigateCard from '../assets/components/NavigateCard';
import RideOptionsCard from '../assets/components/RideOptionsCard';

const MapScreen = () => {
  const Stack = createStackNavigator();
  return (
    <View>
      <Text></Text>
      <View style={tw `h-1/2`}>
        <Map/>

      </View>
      <View style={tw `h-1/2`}>
        <Stack.Navigator>
          <Stack.Screen
          name="NavigateCard"
          component={NavigateCard}
          options={{
            headerShown: false,
          }}/>
           <Stack.Screen
          name="RideOptionsCard"
          component={RideOptionsCard}
          options={{
            headerShown: false,
          }}/>
        </Stack.Navigator>


      </View>
    </View>
  )
}

export default MapScreen;
