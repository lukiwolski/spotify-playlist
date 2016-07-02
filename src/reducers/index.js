import { combineReducers } from 'redux';
import { ADD_TRACK } from '../actions';

const tracks = (state = [], action) => {
  switch (action.type) {
    case ADD_TRACK:
      return [
        ...state,
        'traktor',
      ];
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  tracks,
});

export default rootReducer;
