import { createStore } from 'redux';
import rootReducers from 'reducers';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
  key: 'root',
  storage,
};
const pReducer = persistReducer(persistConfig, rootReducers);
export const store = createStore(
  pReducer,
  // eslint-disable-next-line no-underscore-dangle
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);
export const persistor = persistStore(store);
