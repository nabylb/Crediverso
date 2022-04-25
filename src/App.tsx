import React from 'react';
import ListScreen from './screens/ListScreen';
import {store} from './store';
import {Provider} from 'react-redux';

const App = () => {
  return (
    <Provider store={store}>
      <ListScreen />
    </Provider>
  );
};

export default App;
