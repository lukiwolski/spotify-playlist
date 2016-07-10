import { combineReducers } from 'redux';
import { ADD_TRACK, PROMPT_TRACK } from '../actions';
import { trackHint } from '../utils';

const searchedTracks = (state = [], action) => {
  switch (action.type) {
    case PROMPT_TRACK:
      return [
        ...state,
        trackHint(action.trackInfo),
      ];
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  searchedTracks,
});

export default rootReducer;
