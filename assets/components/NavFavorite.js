import React from 'react'
import { View, Text, FlatList } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler';

const data = [
  {
    id: "123",
    icon: "home",
    location: "Home",
    destination: "Shibuya White Glass Coffee",
  },
  {
    id: "456",
    icon: "work",
    location: "Work",
    destination: "Meguro",
  },
];

const NavFavorites = () => {
    return <FlatList
    data={data}
    keyExtractor={(item) => item.id}
    renderItem={({item}) => (
      <TouchableOpacity>

      </TouchableOpacity>
    )}
    />;
};

export default NavFavorites;