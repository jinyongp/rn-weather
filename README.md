# RN Weather

Learning React Native by building Weather App

## React Native

`View`가 `div` 역할, `Text`가 `span` 역할을 한다.

```jsx
<View>
  <Text>Hello, React Native!</Text>
</View>
```

`StyleSheet`의 `flex`를 이용하여 화면을 채우고 정렬을 할 수 있다.

```jsx
<View style={styles.container}>
  <Text>Hello, React Native!</Text>
</View>

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center,
  }
});
```

웹과 다르게 부모의 스타일이 자식에게 적용되지 않는다. 스타일이 필요하다면 별도로 지정해줘야 한다.

```jsx
<View style={styles.container}>
  <Text style={styles.text}>Hello, React Native!</Text>
</View>

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center,
  },
  text: {
    fontSize: 30,
    color: "#2c2c2c",
  }
});
```

## Location API

```sh
> expo install expo-location
```

```jsx
import * as Location from "expo-location";

async function getLocation() {
  try {
    await Location.requestPermissionsAsync();
    const { coords } = await Location.getCurrentPositionAsync();
    return coords;
  } catch {
    Alert.alert("Permission denied", "Turn on location services in setting");
  }
}
```

`requestPermissionsAsync()`에서 권한 허가 요청을 수락하면 `getCurrentPositionAsync()` 함수 호출에서 현재 위치를 가져올 수 있다. 권한이 거부된다면 다시 요청하지 않고 `getCurrentPositionAsync()` 함수에서 에러를 발생시켜 경고창이 뜬다.

## Weather API

[Go to API Site](https://openweathermap.org/api)

`environment.sample.js` 파일에서 API key를 수정하고 `environment.js`로 이름을 변경한다.
