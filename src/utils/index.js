import { compose, replace } from 'ramda';

const baseUrl = 'https://api.spotify.com/v1/search?q={QUERY}&type=track';

const makeUrl = (t) => replace('{QUERY}', t, baseUrl);
const spotifySearch = compose(makeUrl);

fetch(`https://api.spotify.com/v1/search?q=${query}&type=track`)
  .then(response => response.json())
  .then(json => console.log(json));

export { spotifySearch };
