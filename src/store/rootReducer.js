import { combineReducers } from 'redux';
// here import all your reducers from all your modules
import sampleReducer from '../modules/sampleModule';

export default combineReducers({
    // here combine all reducers:
  sampleReducer,
});
