import React from 'react';
import Track from '../components/Track';
import { connect } from 'react-redux';
import style from '../style.css';

const List = ({ trackList }) =>
  <ul >
    {trackList.map((track, index) =>
      <Track
        key={index}
        trackIndex={index}
        title={track.title}
        artist={track.artist}
        cover={track.image}
        isPlaying={track.isPlaying}
      />
    )}
  </ul>;

List.propTypes = {
  trackList: React.PropTypes.array,
};

const mapStateToProps = ({ trackList }) => ({
  trackList,
});

export default connect(mapStateToProps)(List);
