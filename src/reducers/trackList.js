import { ADD_TRACK, PLAY_TRACK, STOP_TRACK, UPVOTE, DOWNVOTE } from '../actions';
import { trackDetails, updatePlayingProps, updateLikes } from '../utils';

export const trackList = (state = [], action) => {
  switch (action.type) {
    case ADD_TRACK:
      return [
        ...state,
        trackDetails(action.track),
      ];
    case PLAY_TRACK:
    case STOP_TRACK:
      return updatePlayingProps(action.indexNumber, state);
    case UPVOTE:
      return updateLikes(action.indexNumber, state, UPVOTE);
    case DOWNVOTE:
      return updateLikes(action.indexNumber, state, DOWNVOTE);
    default:
      return state;
  }
};
