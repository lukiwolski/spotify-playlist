import { UPVOTE, DOWNVOTE } from '../actions';
import R from 'ramda';

const loggit = x => {
  console.log(x);
  return x;
};

const getName = R.prop('name');

const getId = R.prop('id');

const getIndex = x => z => z[x];

const getArtist = R.compose(getName, getIndex(0), R.prop('artists'));

const getCoverImage = R.compose(R.prop('url'), getIndex(1), R.prop('images'), R.prop('album'));

const songUrl = R.prop('preview_url');

const firstMatch = R.compose(getIndex(0), R.prop('items'), R.prop('tracks'));

const noMatches = () => ({
  error: 'No Results for this query',
});

const createAudioObject = x => new Audio(x);

const makeTrackAudio = R.compose(createAudioObject, songUrl);

export const checkResponse = R.either(firstMatch, noMatches);

export const trackHint = x => `${getArtist(x)} - ${getName(x)}`;

export const trackDetails = x => ({
  artist: getArtist(x),
  title: getName(x),
  image: getCoverImage(x),
  song: makeTrackAudio(x),
  id: getId(x),
  isPlaying: false,
  likes: 0,
});

export const isInTheList = (item, list) => R.contains(R.prop('id', item), R.map(getId, list));

export const updatePlayingProps = (index, list) =>
  list.map((val, i) => {
    let isPlaying = false;

    if (i === index) isPlaying = true;

    return {
      ...val,
      isPlaying,
    };
  });

export const incrementTrackIndex = (index, length) => (
  R.add(index, 1) < length ? R.add(index, 1) : 0
);

export const updateLikes = (index, list, action) =>
  list.map((val, i) => {
    if (i === index) {
      let likes = val.likes;

      if (action === DOWNVOTE && val.likes !== 0) {
        likes = R.subtract(val.likes, 1);
      }

      if (action === UPVOTE) {
        likes = R.add(val.likes, 1);
      }

      return {
        ...val,
        likes,
      };
    }
    return val;
  });

