import {
  StyleSheet,
  Text,
  View,
  useWindowDimensions,
  SafeAreaView,
} from "react-native";
import React from "react";
import Map from "../components/Map";

//import MapView from "react-native-maps";
import tailwind from "twrnc";

const MapScreen = () => {
  const { width, height } = useWindowDimensions();

  return (
    <View style={{ flex: 1 }}>
      <View style={tailwind`h-1/2`}>
        <Map />
      </View>

      <View style={tailwind`h-1/2`}></View>
    </View>
  );
};

export default MapScreen;
