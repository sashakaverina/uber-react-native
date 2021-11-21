import { useNavigation } from '@react-navigation/native';
import React from 'react'
import { View, Image, Text, SafeAreaView, TouchableOpacity } from 'react-native';
import { Icon } from 'react-native-elements';
import { FlatList } from 'react-native-gesture-handler';
import tw from 'tailwind-react-native-classnames';
import { useState } from 'react';

const data = [
  {
    id: "Uber-X-123",
    title: "UberX",
    multiplier: 1,
    image: "http://links.papareact.com/3pn",
  },
  {
    id: "Uber-X-456",
    title: "UberXL",
    multiplier: 1.2,
    image: "http://links.papareact.com/5w8",
  },
  {
    id: "Uber-X-789",
    title: "UberLUX",
    multiplier: 1.75,
    image: "http://links.papareact.com/7pf",
  }
]

const RideOptionsCard = () => {
  const navigation = useNavigation();
  const [selected, setSelected] = useState(null);

  return (
   <SafeAreaView style={tw `bg-white flex-grow`}>
     <View>
       <TouchableOpacity 
        onPress={ () => navigation.navigate("NavigateCard")}
        style={ tw `absolute top-3 left-5 z-50 p-3 rounded-full`}>
         <Icon name="chevron-left" type="fontawesome"/>
       </TouchableOpacity>
     </View>
     <Text style={tw `text-center py-5 text-xl`}>Select a ride</Text>
     <FlatList
       data={data}
       keyExtractor={(item) => item.id}
       renderItem={({ item: {id, title, multiplier, image}, item }) => (
         <TouchableOpacity 
         onPress={() => setSelected(item)}
         style={tw `flex-row justify-between items-center px-10 ${id === selected.id && "bg-gray-200"}`}>
             <Image
               style={{
               width: 70,
               height: 70,
               resizeMode: "contain",
             }}
             source={{ uri: image }}
             />
             <View style={tw `-ml-6`}>
               <Text style={tw `text-xl font-semibold`}>{title}</Text>
               <Text>Travel time</Text>
             </View>
             <Text style={tw `text-xl`}>$99</Text>
         </TouchableOpacity>
       )}
     />
     <View>
       <TouchableOpacity 
       disabled={!selected} 
       style={tw `bg-black py-3 m-3 ${!selected && "bg-gray-300"}`}>
         <Text style={tw `text-center text-white text-xl`}>Choose {selected?.title}</Text>
       </TouchableOpacity>
     </View>
   </SafeAreaView>
  );
};

export default RideOptionsCard;
