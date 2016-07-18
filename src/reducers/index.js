import { searchedTracks } from './searchedTracks';
import { trackList } from './trackList';
import { responseStatus } from './responseStatus';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  searchedTracks,
  trackList,
  responseStatus,
});

export default rootReducer;
