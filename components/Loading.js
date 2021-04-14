import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function Loading() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Getting the Awesome Weather!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-end",
    paddingHorizontal: 30,
    paddingVertical: 200,
    backgroundColor: "#74b9ff",
  },
  text: {
    fontSize: 30,
    fontWeight: "200",
    color: "#2c2c2c",
  },
});
