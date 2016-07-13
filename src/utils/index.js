import R from 'ramda';

const songName = R.prop('name');

const artistName = R.prop('name', R.prop('artists'));

const coverImage = R.compose(R.prop('images'), R.prop('album'));

const previewSong = R.prop('preview_url');

export const trackHint = a => {
  if (a.length > 0 && typeof R.last(a) !== 'undefined') {
    return `${artistName(R.last(a))} - ${songName(R.last(a))}`;
  }
  return a;
};

export const trackDetails = a => ({
  loggit: a,
  artist: artistName(a),
  title: songName(a),
  image: coverImage(a),
  song: previewSong(a),
});
