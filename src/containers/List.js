import React from 'react';
import { connect } from 'react-redux';

class List extends React.Component {
  render() {
    const { trackList } = this.props;

    {trackList.map(x => {
      console.log(x)
    })}

    return (
      <div>List</div>
    )
  }
}

List.propTypes = {
  trackList: React.PropTypes.array,
};

const mapStateToProps = ({ trackList }) => ({
  trackList,
});

export default connect(mapStateToProps)(List);
