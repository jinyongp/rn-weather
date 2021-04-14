import React from "react";
import { StatusBar, StyleSheet, View, Text } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import PropTypes from "prop-types";

const getWeatherOptions = (condition) => {
  const setOptions = (icon, gradient, title, subtitle) => ({
    icon,
    gradient,
    title,
    subtitle,
  });
  switch (condition) {
    case "Thunderstorm":
      return setOptions(
        "weather-lightning",
        ["#373B44", "#4286f4"],
        "Thunderstorm in the house",
        "Actually, outside of the house"
      );
    case "Drizzle":
      return setOptions(
        "weather-hail",
        ["#89F7FE", "#66A6FF"],
        "Drizzle",
        "Good day to sing in the drizzle"
      );
    case "Rain":
      return setOptions(
        "weather-rainy",
        ["#00C6FB", "#005BEA"],
        "Rain rain rain",
        "You'd have a new car yesterday, wouldn't you?"
      );
    case "Snow":
      return setOptions(
        "weather-snowy",
        ["#7DE2FC", "#B9B6E5"],
        "Snow!",
        "Do You Want to Build A Snowman? Okay bye..."
      );
    case "Clear":
      return setOptions(
        "weather-sunny",
        ["#FF7300", "#FEF253"],
        "Sunny",
        "How about taking a walk outside?"
      );
    case "Clouds":
      return setOptions(
        "weather-cloudy",
        ["#D7D2CC", "#304352"],
        condition,
        "It's perfect for sleeping late today."
      );
    default:
      return setOptions(
        "cloud-question",
        ["#0F2027", "#2C5364"],
        condition,
        "Wake up and look outside"
      );
  }
};

export default function Weather({ temp, condition }) {
  return (
    <LinearGradient
      colors={getWeatherOptions(condition).gradient}
      style={styles.container}
    >
      <StatusBar barStyle="light-content" />
      <View style={styles.halfContainer}>
        <MaterialCommunityIcons
          name={getWeatherOptions(condition).icon}
          size={96}
          color="white"
        />
        <Text style={styles.temp}>{temp}℃</Text>
      </View>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>{getWeatherOptions(condition).title}</Text>
        <Text style={styles.subtitle}>
          {getWeatherOptions(condition).subtitle}
        </Text>
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
  halfContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  temp: {
    fontSize: 36,
    color: "white",
  },
  titleContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "flex-start",
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 42,
    color: "white",
    fontWeight: "300",
    marginBottom: 20,
  },
  subtitle: {
    fontSize: 30,
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
