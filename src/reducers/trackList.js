import { ADD_TRACK, PLAY_TRACK } from '../actions';
import { trackDetails, updatePlayingProps } from '../utils';

export const trackList = (state = [], action) => {
  switch (action.type) {
    case ADD_TRACK:
      return [
        ...state,
        trackDetails(action.track),
      ];
    case PLAY_TRACK:
      return updatePlayingProps(action.indexNumber, state);
    default:
      return state;
  }
};
