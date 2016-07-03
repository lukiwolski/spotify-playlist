export const ADD_TRACK = 'ADD_TRACK';
export function requestPosts(title) {
  return {
    type: ADD_TRACK,
    title,
  };
}

export const PROMPT_TRACK = 'PROMPT_TRACK';
function promptTrack(trackData) {
  const firstTrack = trackData.tracks.items[0];

  return {
    type: PROMPT_TRACK,
    artist: firstTrack.artists[0].name,
    title: firstTrack.name,
  };
}

export const fetchPosts = (query) => (dispatch) => (
  fetch(`https://api.spotify.com/v1/search?q=${query}&type=track`)
      .then(response => response.json())
      .then(json => dispatch(promptTrack(json)))
      .catch(error => error)
);
