import Reactotron from 'reactotron-react-native';
/* __DEV__ RN global variable that indicates emulation of app in dev enviroment */
if (__DEV__) {
  const tron = Reactotron.configure()
    .useReactNative()
    .connect();
  console.tron = tron;
  tron.clear();
}
