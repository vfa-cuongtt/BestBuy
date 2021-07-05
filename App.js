import React from 'react';
import {Provider} from 'react-redux';
import store from './src/component/redux/store';
import RootNavigation from './src/component/navigation/rootNavigator';

const App = () => (
  <Provider store={store}>
    <RootNavigation />
  </Provider>
);

export default App;
