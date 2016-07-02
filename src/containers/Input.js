import React from 'react';
import { connect } from 'react-redux';
import { zaloguj, requestPosts } from '../actions';

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

  searchClicked() {
    const { dispatch } = this.props;
    dispatch(requestPosts('costam'));
    
  }

  render() {
    return (
      <div>
        <input onChange={this.queryChanged} placeholder="Find a track" />
        <button onClick={this.searchClicked}>Search</button>
      </div>
    );
  }
}

export default connect()(Input);
