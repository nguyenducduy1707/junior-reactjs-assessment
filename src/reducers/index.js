import { combineReducers } from 'redux';
import displayAllHeros from './displayHero';
import displayHeroDetail from './heroDetail';

const rootReducers = combineReducers({
  displayAllHeros,
  displayHeroDetail,
});

export default rootReducers;
