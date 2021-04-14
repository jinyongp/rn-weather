import React from "react";
import { StatusBar, StyleSheet, View, Text } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import PropTypes from "prop-types";

const getWeatherOptions = (condition) => {
  const setOptions = (icon, gradient) => ({ icon, gradient });
  switch (condition) {
    case "Thunderstorm":
      return setOptions("weather-lightning", ["#373B44", "#4286f4"]);
    case "Drizzle":
      return setOptions("weather-hail", ["#89F7FE", "#66A6FF"]);
    case "Rain":
      return setOptions("weather-rainy", ["#00C6FB", "#005BEA"]);
    case "Snow":
      return setOptions("weather-snowy", ["#7DE2FC", "#B9B6E5"]);
    case "Mist":
    case "Smoke":
    case "Haze":
    case "Dust":
    case "Fog":
    case "Sand":
    case "Dust":
    case "Ash":
    case "Squall":
    case "Tornado":
      return setOptions("", ["", ""]);
    case "Clear":
      return setOptions("weather-sunny", ["#FF7300", "#FEF253"]);
    case "Clouds":
      return setOptions("weather-cloudy", ["#D7D2CC", "#304352"]);
    default:
      return setOptions("cloud-question", ["#2193b0", "#6dd5ed"]);
  }
};

export default function Weather({ temp, condition }) {
  return (
    <LinearGradient
      colors={getWeatherOptions(condition).gradient}
      style={styles.container}
    >
      <StatusBar barStyle="light-content" />
      <View style={styles.half}>
        <MaterialCommunityIcons
          name={getWeatherOptions(condition).icon}
          size={96}
          color="white"
        />
        <Text style={styles.temp}>{temp}℃</Text>
      </View>
      <View style={styles.half}>
        <Text style={styles.condition}>{condition}</Text>
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  half: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  temp: {
    fontSize: 36,
    color: "white",
  },
  condition: {
    fontSize: 42,
    color: "white",
  },
});

Weather.propTypes = {
  temp: PropTypes.number.isRequired,
  condition: PropTypes.oneOf([
    "Thunderstorm",
    "Drizzle",
    "Rain",
    "Snow",
    "Mist",
    "Smoke",
    "Haze",
    "Dust",
    "Fog",
    "Sand",
    "Dust",
    "Ash",
    "Squall",
    "Tornado",
    "Clear",
    "Clouds",
  ]).isRequired,
};
