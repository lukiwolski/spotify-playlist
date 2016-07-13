import { combineReducers } from 'redux';
import { ADD_TRACK, PROMPT_TRACK } from '../actions';
import { trackDetails } from '../utils';

const searchedTracks = (state = [], action) => {
  switch (action.type) {
    case PROMPT_TRACK:
      return [
        ...state,
        action.trackInfo,
      ];
    default:
      return state;
  }
};

const trackList = (state = [], action) => {
  switch (action.type) {
    case ADD_TRACK:
      return [
        ...state,
        trackDetails(action.track),
      ];
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  searchedTracks,
  trackList,
});

export default rootReducer;
