import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
} from "react-native";
import React from "react";

import { Feather } from "@expo/vector-icons";
import tailwind from "twrnc";
import { Icon } from "@rneui/base";

const data = [
  {
    id: "123",
    icon: "home",
    location: "Home",
    destination: "8103 South Congress Avenue, Austin, TX",
  },
  {
    id: "456",
    icon: "briefcase",
    location: "Work",
    destination: "2120 West Braker Lane, Austin, TX",
  },
];

const NavFavorites = () => {
  return (
    <FlatList
      data={data}
      keyExtractor={(item) => item.id}
      ItemSeparatorComponent={() => (
        <View style={[tailwind`bg-gray-200`, { height: 0.5 }]}></View>
      )}
      renderItem={({ item: { location, destination, icon } }) => (
        <TouchableOpacity
          style={tailwind`flex-row item-center p-5`}
          activeOpacity={0.7}
        >
          <Icon
            style={tailwind`mr-4 rounded-full bg-gray-300 p-3`}
            name={icon}
            type="ionicon"
            size={24}
            color="white"
          />
          <View>
            <Text style={tailwind`font-semibold text-lg`}>{location}</Text>
            <Text style={tailwind`text-gray-500`}>{destination}</Text>
          </View>
        </TouchableOpacity>
      )}
    />
  );
};

export default NavFavorites;

const styles = StyleSheet.create({});
