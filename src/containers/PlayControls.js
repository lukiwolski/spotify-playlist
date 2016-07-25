import React from 'react';
import Start from '../components/Start';
import Stop from '../components/Stop';
import Next from '../components/Next';
import { playTrack, stopTrack } from '../actions';
import { incrementTrackIndex } from '../utils';
import { connect } from 'react-redux';
import style from '../style.css';

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
    const { trackList, dispatchStop } = this.props;

    if (!trackList.length) return;

    this.stopPlaying();

    // do not jump to the next track when on the last item
    if (currentTrackIndex === trackList.length - 1) {
      this.setState({
        currentTrackIndex: incrementTrackIndex(currentTrackIndex, trackList.length),
      });
      dispatchStop(-1);
    } else {
    // start playing next track automatically
      this.setState({
        currentTrackIndex: incrementTrackIndex(currentTrackIndex, trackList.length),
      }, this.startPlaying);
    }
  }

  render() {
    return (
      <div className={style.container_control}>
        <Stop handleClick={this.stopPlaying} />
        <Start handleClick={this.startPlaying} />
        <Next handleClick={this.nextTrack} />
      </div>
    );
  }
}

PlayControls.propTypes = {
  trackList: React.PropTypes.array,
  dispatchPlay: React.PropTypes.func,
  dispatchStop: React.PropTypes.func,
};

const mapStateToProps = ({ trackList }) => ({
  trackList,
});

const mapDispatchToProps = dispatch => ({
  dispatchPlay: index => dispatch(playTrack(index)),
  dispatchStop: index => dispatch(stopTrack(index)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PlayControls);
