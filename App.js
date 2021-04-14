import { StatusBar } from "expo-status-bar";
import React, { useEffect, useState } from "react";
import { StyleSheet, View, Alert } from "react-native";
import * as Location from "expo-location";
import Axios from "axios";
import { Loading, Weather } from "./components";
import Env from "./environment";

export default function App() {
  const [loading, setLoading] = useState(true);
  const [temp, setTemp] = useState(0);
  const [condition, setCondition] = useState("");

  const getLocation = async () => {
    try {
      await Location.requestPermissionsAsync();
      const { coords } = await Location.getCurrentPositionAsync();
      setLoading(false);
      return coords;
    } catch {
      Alert.alert(
        "Services are disabled",
        "Turn on location services to get weather information of your location\n\nSetting > Privacy > Location Services"
      );
    }
  };

  const getWeather = async (latitude, longitude) => {
    const API_URL = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=metric&lang=kr&appid=${Env.WEATHER_API_KEY}`;
    try {
      const { data } = await Axios.get(API_URL);
      setTemp(data?.main.temp);
      setCondition(data?.weather[0].main);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    (async () => {
      const { latitude, longitude } = await getLocation();
      await getWeather(latitude, longitude);
    })();
  }, []);
  return (
    <View style={styles.container}>
      {loading ? (
        <Loading />
      ) : (
        <Weather temp={Math.round(temp)} condition={condition} />
      )}
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
