import React from 'react';
import Track from '../components/Track';
import { connect } from 'react-redux';
import { listStyles } from '../styles';

class List extends React.Component {
  render() {
    const { trackList } = this.props;

    return (
      <ul style={listStyles}>
        {trackList.map((track, index) =>
          <Track
            key={index}
            title={track.title}
            artist={track.artist}
            cover={track.image}
          />
        )}
      </ul>
    );
  }
}

List.propTypes = {
  trackList: React.PropTypes.array,
};

const mapStateToProps = ({ trackList }) => ({
  trackList,
});

export default connect(mapStateToProps)(List);
