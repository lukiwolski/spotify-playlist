import React from 'react';
import { liStyles, spanStyles, iconLike, iconDislike } from '../styles';
import { FaArrowCircleDown, FaArrowCircleUp } from 'react-icons/lib/fa';
import { upVoteTrack, downVoteTrack } from '../actions';
import { connect } from 'react-redux';

class Track extends React.Component {
  constructor() {
    super();

    this.upVote = this.upVote.bind(this);
    this.downVote = this.downVote.bind(this);
  }

  upVote() {
    const { trackIndex, dispatchUpVote } = this.props;

    dispatchUpVote(trackIndex);
  }

  downVote() {
    const { trackIndex, dispatchDownVote } = this.props;

    dispatchDownVote(trackIndex);
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
  trackIndex: React.PropTypes.number,
  dispatchDownVote: React.PropTypes.func,
  dispatchUpVote: React.PropTypes.func,
};


const mapDispatchToProps = dispatch => ({
  dispatchUpVote: trackIndex => dispatch(upVoteTrack(trackIndex)),
  dispatchDownVote: trackIndex => dispatch(downVoteTrack(trackIndex)),
});

export default connect(
  null,
  mapDispatchToProps
)(Track);
