import { combineReducers } from 'redux';
import displayHeroReducer from './displayHero';

const rootReducers = combineReducers({
  display: displayHeroReducer,
});

export default rootReducers;
