import * as R from 'ramda';
import * as Maybe from 'data.maybe';

const loggit = t => console.log(t)

const songName = a => R.prop('name', a)

const artistName = a => R.prop('name', R.prop('artists', a)[0])

export const trackHint = R.compose(loggit, artistName)

