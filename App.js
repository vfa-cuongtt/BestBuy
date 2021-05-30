
import React from 'react';
import { Provider } from 'react-redux';
import ProductList from "./src/component/ProductList";
import store from './src/component/redux/store';


const App =() => (
  <Provider store={store}>
    <ProductList />
  </Provider>
)

export default App;