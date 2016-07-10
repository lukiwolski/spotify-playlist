import React from 'react';
import Autocomplete from '../components/Autocomplete';
import { connect } from 'react-redux';
import { fetchPosts } from '../actions';

class Input extends React.Component {
  constructor() {
    super();

    this.queryChanged = this.queryChanged.bind(this);
    this.addToQueue = this.addToQueue.bind(this);
    this.state = {
      query: '',
      timeout: null,
    };
  }

  addToQueue() {
    console.log(this.props);
  }

  queryChanged({ currentTarget: t }) {
    const { query } = this.state;
    const { searchQuery } = this.props;

    this.setState({
      query: t.value,
    });

    clearTimeout(this.timeout);

    this.timeout = setTimeout(() => {
      searchQuery(query);
    }, 1000);
  }

  render() {
    const { queryResponse } = this.props;

    return (
      <div>
        <input onChange={this.queryChanged} placeholder="Find a track" />
        <Autocomplete hint={queryResponse} handleClick={this.addToQueue} />
      </div>
    );
  }
}

Input.propTypes = {
  dispatch: React.PropTypes.func,
  queryResponse: React.PropTypes.array,
  searchQuery: React.PropTypes.func,
};

const mapStateToProps = ({ searchedTracks }) => ({
  queryResponse: searchedTracks,
});

const mapDispatchToProps = (dispatch) => ({
  searchQuery: (query) => dispatch(fetchPosts(query)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Input);
