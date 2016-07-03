import { combineReducers } from 'redux';
import { ADD_TRACK, PROMPT_TRACK } from '../actions';

const tracks = (state = {}, action) => {
  switch (action.type) {
    case PROMPT_TRACK:
    console.log(state)
      return {
        ...state,
        artist: action[artist],
        title: action[title],
      };
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  tracks,
});

export default rootReducer;
