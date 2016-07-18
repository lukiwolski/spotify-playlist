import { PROMPT_TRACK } from '../actions';

export const searchedTracks = (state = [], action) => {
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
