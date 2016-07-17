import React from 'react';
import Start from '../components/Start';
import Stop from '../components/Stop';
import Next from '../components/Next';
import { playTrack } from '../actions';
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

    trackList[currentTrackIndex].song.play();
    dispatchPlay(currentTrackIndex);
  }

  stopPlaying() {
    const { currentTrackIndex } = this.state;
    const { trackList } = this.props;

    trackList[currentTrackIndex].song.pause();
  }

  nextTrack() {

  }

  render() {
    return (
      <div>
        <Start handleClick={this.startPlaying} />
        <Stop handleClick={this.stopPlaying} />
        <Next handleClick={this.nextTrack} />
      </div>
    );
  }
}

PlayControls.propTypes = {
  trackList: React.PropTypes.array,
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
