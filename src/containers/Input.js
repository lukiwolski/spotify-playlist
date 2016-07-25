import React from 'react';
import Autocomplete from '../components/Autocomplete';
import { connect } from 'react-redux';
import { fetchPosts, addTrack } from '../actions';
import { trackHint, isInTheList } from '../utils';
import R from 'ramda';
import style from '../style.css';

class Input extends React.Component {
  constructor() {
    super();

    this.queryChanged = this.queryChanged.bind(this);
    this.addToQueue = this.addToQueue.bind(this);
    this.state = {
      timeout: null,
      showTooltip: true,
    };
  }

  addToQueue() {
    const { queryResponse, addPlaylistTrack, trackList } = this.props;

    // Preventing multiple addition of the same result
    if (!isInTheList(R.last(queryResponse), trackList)) {
      addPlaylistTrack(R.last(queryResponse));
      this.setState({ showTooltip: false });
    }
  }

  queryChanged({ currentTarget: t }) {
    const { searchQuery } = this.props;

    clearTimeout(this.timeout);

    this.timeout = setTimeout(() => {
      if (t.value.length > 2) {
        searchQuery(t.value);
        this.setState({ showTooltip: true });
      }
    }, 1000);
  }

  render() {
    const { queryResponse, responseStatus } = this.props;
    const { showTooltip } = this.state;
    let autocomplete;

    if (queryResponse.length) {
      autocomplete = (
        <Autocomplete
          hint={trackHint(R.last(queryResponse))}
          handleClick={this.addToQueue}
        />
      );
    }

    if (responseStatus.error) {
      autocomplete = (
        <Autocomplete
          hint={responseStatus.error}
        />
      );
    }

    return (
      <div className={style.container_input}>
        <input
          onKeyUp={this.queryChanged}
          className={style.input}
          placeholder="Look for a song"
        />
        {showTooltip ? autocomplete : ''}
      </div>
    );
  }
}

Input.propTypes = {
  dispatch: React.PropTypes.func,
  queryResponse: React.PropTypes.array,
  searchQuery: React.PropTypes.func,
  addPlaylistTrack: React.PropTypes.func,
  responseStatus: React.PropTypes.object,
  trackList: React.PropTypes.array,
};

const mapStateToProps = ({ searchedTracks, responseStatus, trackList }) => ({
  queryResponse: searchedTracks,
  responseStatus,
  trackList,
});

const mapDispatchToProps = dispatch => ({
  searchQuery: query => dispatch(fetchPosts(query)),
  addPlaylistTrack: trackData => dispatch(addTrack(trackData)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Input);
