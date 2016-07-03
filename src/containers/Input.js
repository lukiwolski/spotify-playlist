import React from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from '../actions';

class Input extends React.Component {
  constructor() {
    super();

    this.searchClicked = this.searchClicked.bind(this);
    this.queryChanged = this.queryChanged.bind(this);
    this.state = {
      query: '',
    };
  }

  queryChanged({ currentTarget: t }) {
    this.setState({
      query: t.value,
    });
  }

  searchClicked(e) {
    e.preventDefault();

    const { dispatch } = this.props;
    const { query } = this.state;

    dispatch(fetchPosts(query));
    console.log(this.props)
  }

  render() {
    return (
      <form onSubmit={this.searchClicked}>
        <h1>Prompty: {this.props.promptTitle}</h1>
        <input onChange={this.queryChanged} placeholder="Find a track" />
        <button>Search</button>
      </form>
    );
  }
}

Input.propTypes = {
  dispatch: React.PropTypes.func,
};

const mapStateToProps = (state) => ({
  promptTitle: state.tracks.artist,
});

export default connect(mapStateToProps)(Input);
