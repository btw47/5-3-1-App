import React, { Component } from 'react';
import { connect } from 'react-redux';

import UserStats from '../components/UserStats';
import NavBar from '../components/NavBar';

class Compare extends Component {
  fetchOldStats = () => {
    console.log('FETCH OLD STATS');
  };

  render() {
    const { state } = this.props;
    console.log(this.props);
    return (
      <div className="Compare">
        <NavBar user={state.auth.user} />
        <UserStats user={state.user} />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { state };
};

export default connect(mapStateToProps)(Compare);
