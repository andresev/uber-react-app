import {
  StyleSheet,
  Text,
  View,
  useWindowDimensions,
  SafeAreaView,
} from "react-native";
import React from "react";
import Map from "../components/Map";
import NavigateCard from "../components/NavigateCard";
import RideOptionsCar from "../components/RideOptionsCar";

import { createNativeStackNavigator } from "@react-navigation/native-stack";

//import MapView from "react-native-maps";
import tailwind from "twrnc";

const Stack = createNativeStackNavigator();

const MapScreen = () => {
  const { width, height } = useWindowDimensions();

  return (
    <View style={{ flex: 1 }}>
      <View style={tailwind`h-1/2`}>
        <Map />
      </View>

      <View style={tailwind`h-1/2`}>
        <Stack.Navigator>
          <Stack.Screen
            name="NavigateCard"
            component={NavigateCard}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="RideOptionsCard"
            component={RideOptionsCar}
            options={{ headerShown: false }}
          />
        </Stack.Navigator>
      </View>
    </View>
  );
};

export default MapScreen;
