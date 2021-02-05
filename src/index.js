import React from 'react';
import ReactDOM from 'react-dom';
import { PersistGate } from 'redux-persist/lib/integration/react';
import './index.css';
import { Provider } from 'react-redux';
import { persistor, store } from './store';
import App from './App';

ReactDOM.render(
  <Provider store={store}>
    <PersistGate persistor={persistor}>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </PersistGate>
  </Provider>,
  document.getElementById('root'),
);
