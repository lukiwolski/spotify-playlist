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
});

export const isInTheList = (item, list) => R.contains(R.prop('id', item), R.map(getId, list));

export const updatePlayingProps = (index, list) => {
  return list.map((val, i) => {
    let isPlaying = false;

    if (i === index) isPlaying = true;

    return {
      ...val,
      isPlaying,
    };
  });
};

export const incrementTrackIndex = (index, length) => (
  R.add(index, 1) < length ? R.add(index, 1) : 0
);
