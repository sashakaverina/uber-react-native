import React from 'react'
import { View, Text, FlatList, TouchableOpacity, Image } from 'react-native'
import tw from 'tailwind-react-native-classnames';

const data = [
  {
    id: "123",
    title: 'Get a ride',
    image: require('../car_uber.png'),
    screen: "MapScreen",
  },
  {
    id: "456",
    title: 'Order Food',
    image: require('../thai_noodles.png'),
    screen: "EatsScreen",
  },
];

const NavOptions = () => {
  return (
    <FlatList
    data={data}
    keyExtractor={(item) => item.id}
    horizontal
    renderItem={({item}) => (
      <TouchableOpacity style={tw `p-2 pl-6 pb-8 pt-4 bg-gray-200 m-2 w-40`}>
        <View>
          <Image
          style={{
            width: 100,
            height: 100,
            resizeMode: "contain",
          }}
          source={item.image}
          />
          <Text>
            {item.title}
          </Text>
        </View>
      </TouchableOpacity>
    )}
    />
  )
}

export default NavOptions;
