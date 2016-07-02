export const ADD_TRACK = 'ADD_TRACK';

export function requestPosts(title) {
  return {
    type: ADD_TRACK,
    title,
  };
}

export function zaloguj(data) {
  console.log(data);
}

// export function fetchTracks(title) {
//   return dispatch => {
//     dispatch(requestPosts(title))
//     return fetch(`http://www.reddit.com/r/${title}.json`)
//       .then(response => response.json())
//       .then(json => dispatch(zaloguj(json)))
//   }
// }
