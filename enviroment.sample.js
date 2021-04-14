import Constants from "expo-constants";

const ENV = {
  dev: {
    WEATHER_API_KEY: null,
  },
};

const Env = ((env = Constants.manifest.releaseChannel) => {
  if (__DEV__) {
    return ENV.dev;
  }
})();

export default Env;
