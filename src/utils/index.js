import { UPVOTE, DOWNVOTE } from '../actions';
import R from 'ramda';

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

const updateLikesProps = (index, list, action) =>
  list.map((val, i) => {
    if (i === index) {
      let likes = val.likes;

      // do not allow likes to be a negative value
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


const sortByLikes = R.sort((a, b) => b.likes - a.likes);

export const updateLikes = (index, list, action) => {
  const currentlyPlayedIndex = R.findIndex(R.propEq('isPlaying', true))(list);

  // do nothing when liked item behind currently playing track in queue
  if (currentlyPlayedIndex >= index) {
    return list;
  } else if (currentlyPlayedIndex === -1) {
    // sort every track if nothing is playing
    return sortByLikes(updateLikesProps(index, list, action));
  }
  // sort only elements after playing item
  const itemsBehind = R.slice(0, currentlyPlayedIndex + 1, list);
  let itemsAfter = R.slice(currentlyPlayedIndex + 1, list.length, list);
  const slicedIndex = index - itemsBehind.length;

  itemsAfter = sortByLikes(updateLikesProps(slicedIndex, itemsAfter, action));

  return [
    ...itemsBehind,
    ...itemsAfter,
  ];
};
