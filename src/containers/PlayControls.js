import React from 'react';
import Start from '../components/Start';
import Stop from '../components/Stop';
import Next from '../components/Next';
import { playTrack } from '../actions';
import { incrementTrackIndex } from '../utils';
import { controlStyles } from '../styles';
import { connect } from 'react-redux';

class PlayControls extends React.Component {
  constructor() {
    super();
    this.startPlaying = this.startPlaying.bind(this);
    this.stopPlaying = this.stopPlaying.bind(this);
    this.nextTrack = this.nextTrack.bind(this);

    this.state = {
      currentTrackIndex: 0,
    };
  }

  startPlaying() {
    const { currentTrackIndex } = this.state;
    const { trackList, dispatchPlay } = this.props;

    dispatchPlay(currentTrackIndex);

    if (trackList.length) {
      const currentTrack = trackList[currentTrackIndex].song;
      currentTrack.play();
      currentTrack.addEventListener('ended', this.nextTrack);
    }
  }

  stopPlaying() {
    const { currentTrackIndex } = this.state;
    const { trackList } = this.props;

    if (!trackList.length) return;
    trackList[currentTrackIndex].song.pause();
  }

  nextTrack() {
    const { currentTrackIndex } = this.state;
    const { trackList } = this.props;

    // TODO stop error when clicking next on the last track
    if (!trackList.length) return;

    this.stopPlaying();
    this.setState({
      currentTrackIndex: incrementTrackIndex(currentTrackIndex, trackList.length),
    }, () => { this.startPlaying(); });
  }

  render() {
    return (
      <div style={controlStyles}>
        <Start handleClick={this.startPlaying} />
        <Stop handleClick={this.stopPlaying} />
        <Next handleClick={this.nextTrack} />
      </div>
    );
  }
}

PlayControls.propTypes = {
  trackList: React.PropTypes.array,
  dispatchPlay: React.PropTypes.func,
};

const mapStateToProps = ({ trackList }) => ({
  trackList,
});

const mapDispatchToProps = dispatch => ({
  dispatchPlay: index => dispatch(playTrack(index)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PlayControls);
