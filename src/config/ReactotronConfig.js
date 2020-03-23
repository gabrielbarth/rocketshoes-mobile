import Reactotron from 'reactotron-react-native';
import { reactotronRedux } from 'reactotron-redux';
import reactotronSaga from 'reactotron-redux-saga';
/* __DEV__ RN global variable that indicates emulation of app in dev enviroment */
if (__DEV__) {
  const tron = Reactotron.configure()
    .use(reactotronRedux())
    .use(reactotronSaga())
    .useReactNative()
    .connect();
  console.tron = tron;
  tron.clear();
}
