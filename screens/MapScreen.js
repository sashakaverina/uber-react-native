import { createStackNavigator } from '@react-navigation/stack';
import React from 'react'
import { View, Text } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import tw from 'tailwind-react-native-classnames';
import Map from '../assets/components/Map';
import NavigateCard from '../assets/components/NavigateCard';
import RideOptionsCard from '../assets/components/RideOptionsCard';
import { Icon } from 'react-native-elements';
import { useNavigation } from '@react-navigation/native';

const MapScreen = () => {
  const Stack = createStackNavigator();
  const navigation = useNavigation();

  return (
    <View>
      <TouchableOpacity style={tw `absolute pt-6 top-16 left-8 bg-gray-100 rounded-full shadow-lg`}>
        <Icon
        name="menu"
        color="black"
        size={50}
        />
      </TouchableOpacity>
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
