import { combineReducers } from 'redux';
import { ADD_TRACK, PROMPT_TRACK, NO_MATCH, PLAY_TRACK } from '../actions';
import { trackDetails, updatePlayingProps } from '../utils';

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
    case PLAY_TRACK:
      console.log(updatePlayingProps(action.indexNumber, state));
      return state;
    default:
      return state;
  }
};

const responseStatus = (state = { error: false }, action) => {
  switch (action.type) {
    case PROMPT_TRACK:
      return {
        ...state,
        error: false,
      };
    case NO_MATCH:
      return {
        ...state,
        error: 'The is no match for this query',
      };
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  searchedTracks,
  trackList,
  responseStatus,
});

export default rootReducer;

