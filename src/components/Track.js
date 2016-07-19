import React from 'react';
import { liStyles, spanStyles, iconLike, iconDislike } from '../styles';
import { FaArrowCircleDown, FaArrowCircleUp } from 'react-icons/lib/fa';

class Track extends React.Component {
  constructor() {
    super();

    this.upVote = this.upVote.bind(this);
    this.downVote = this.downVote.bind(this);
  }

  upVote() {
    console.log('dispatching upvote');
  }

  downVote() {
    console.log('dispatching downvote');
  }

  render() {
    const { title, artist, cover } = this.props;

    return (
      <li style={liStyles}>
        <img src={cover} role="presentation" />
        <span style={spanStyles}>{artist}</span>
        <span style={spanStyles}>{title}</span>
        <FaArrowCircleUp style={iconLike} onClick={this.upVote} />
        <FaArrowCircleDown style={iconDislike} onClick={this.downVote} />
      </li>
    );
  }
}

Track.propTypes = {
  cover: React.PropTypes.string,
  artist: React.PropTypes.string,
  title: React.PropTypes.string,
  handleClick: React.PropTypes.func,
  key: React.PropTypes.number,
};

export default Track;
