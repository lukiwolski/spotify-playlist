import React from 'react';
import Autocomplete from '../components/Autocomplete';
import { connect } from 'react-redux';
import { fetchPosts, addTrack } from '../actions';
import { trackHint } from '../utils';
import { last } from 'ramda';

class Input extends React.Component {
  constructor() {
    super();

    this.queryChanged = this.queryChanged.bind(this);
    this.addToQueue = this.addToQueue.bind(this);
    this.state = {
      query: [],
      timeout: null,
      lastAddedTrack: '',
    };
  }

  addToQueue() {
    const { queryResponse, addPlaylistTrack } = this.props;

    this.setState({
      lastAddedTrack: last(queryResponse),
    });

    const { lastAddedTrack } = this.state;

    if (lastAddedTrack !== last(queryResponse) && typeof last(queryResponse) !== 'undefined') {
      addPlaylistTrack(last(queryResponse));
    }
  }

  queryChanged({ currentTarget: t }) {
    const { searchQuery } = this.props;
    const { query } = this.state;

    clearTimeout(this.timeout);

    this.timeout = setTimeout(() => {
      if (t.value.length > 2) {
        searchQuery(t.value);

        this.setState({ query: query.concat(t.value) });
      }
    }, 1000);
  }

  render() {
    const { queryResponse } = this.props;
    const { query } = this.state;

    return (
      <div>
        <input onKeyUp={this.queryChanged} placeholder="Find a track" />
        {query ? (
          <Autocomplete hint={trackHint(queryResponse)} handleClick={this.addToQueue} />
          ) : ''
         }
      </div>
    );
  }
}

Input.propTypes = {
  dispatch: React.PropTypes.func,
  queryResponse: React.PropTypes.array,
  searchQuery: React.PropTypes.func,
  addPlaylistTrack: React.PropTypes.func,
};

const mapStateToProps = ({ searchedTracks }) => ({
  queryResponse: searchedTracks,
});

const mapDispatchToProps = (dispatch) => ({
  searchQuery: (query) => dispatch(fetchPosts(query)),
  addPlaylistTrack: (trackData) => dispatch(addTrack(trackData)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Input);
