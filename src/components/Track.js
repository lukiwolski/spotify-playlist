import React from 'react';
import { upVoteTrack, downVoteTrack } from '../actions';
import { connect } from 'react-redux';
import { FaArrowCircleDown, FaArrowCircleUp } from 'react-icons/lib/fa';
import style from '../style.css';

const styleDown = `${style.button_vote} ${style.button_down}`;

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
    const { title, artist, cover, isPlaying } = this.props;

    const trackStatus = isPlaying ? { opacity: 1 } : { opacity: 0.3 };

    return (
      <li >
        <img src={cover} role="presentation" style={trackStatus} />
        <span className={style.title}>{title}</span>
        <span className={style.artist}>{artist}</span>
        <FaArrowCircleUp
          onClick={this.upVote}
          className={style.button_vote}
        />
        <FaArrowCircleDown
          onClick={this.downVote}
          className={styleDown}
        />
      </li>
    );
  }
}

Track.propTypes = {
  isPlaying: React.PropTypes.bool,
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
