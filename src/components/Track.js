import React from 'react';

const Track = ({ title, artist, cover }) =>
  <li>
    <img src={cover} role="presentation" />
    <span>{artist}</span>
    <span>{title}</span>
  </li>;

Track.propTypes = {
  cover: React.PropTypes.string,
  artist: React.PropTypes.string,
  title: React.PropTypes.string,
};

export default Track;
