import { checkResponse } from '../utils';

export const ADD_TRACK = 'ADD_TRACK';
export const addTrack = trackData => ({
  type: ADD_TRACK,
  track: trackData,
});

export const PROMPT_TRACK = 'PROMPT_TRACK';
export const NO_MATCH = 'NO_MATCH';
function promptTrack(trackData) {
  const response = checkResponse(trackData);
  const type = response.error ? NO_MATCH : PROMPT_TRACK;

  return {
    type,
    trackInfo: response,
  };
}

export const fetchPosts = query => dispatch => (
  fetch(`https://api.spotify.com/v1/search?q=${query}&type=track`)
      .then(response => response.json())
      .then(json => dispatch(promptTrack(json)))
      .catch(error => error)
);

export const PLAY_TRACK = 'PLAY_TRACK';
export const playTrack = (indexNumber) => ({
  type: PLAY_TRACK,
  indexNumber,
});

export const STOP_TRACK = 'STOP_TRACK';
export const stopTrack = (indexNumber) => ({
  type: STOP_TRACK,
  indexNumber,
});

export const UPVOTE = 'UPVOTE';
export const upVoteTrack = (indexNumber) => ({
  type: UPVOTE,
  indexNumber,
});

export const DOWNVOTE = 'DOWNVOTE';
export const downVoteTrack = (indexNumber) => ({
  type: DOWNVOTE,
  indexNumber,
});
