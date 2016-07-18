import React from 'react';
import { liStyles, spanStyles } from '../styles';

const Track = ({ title, artist, cover }) =>
  <li style={liStyles}>
    <img src={cover} role="presentation" />
    <span style={spanStyles}>{artist}</span>
    <span style={spanStyles}>{title}</span>
  </li>;

Track.propTypes = {
  cover: React.PropTypes.string,
  artist: React.PropTypes.string,
  title: React.PropTypes.string,
};

export default Track;
