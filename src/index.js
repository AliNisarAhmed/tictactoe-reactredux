import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import { Provider } from 'react-redux';
import store from './Redux/storeConfig';

let StatefulApp = () => 
  <Provider store={store}>
    <App />
  </Provider>

ReactDOM.render(<StatefulApp />, document.getElementById('root'));

// App
//....Grid
//......Cell

serviceWorker.unregister();
