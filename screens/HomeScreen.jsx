import React from "react";
import { View, Text, StyleSheet, SafeAreaView, Image } from "react-native";
import tailwind from "twrnc";

const HomeScreen = () => {
  return (
    <SafeAreaView style={tailwind`bg-white h-full`}>
      <View>
        <Image
          style={{
            width: 100,
            height: 100,
            resizeMode: "contain",
          }}
          source={{ uri: "https://links.papareact.com/gzs" }}
        />
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
