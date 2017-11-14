import React, { Component } from 'react';
import firebase from 'firebase';
import SearchInput, { createFilter } from 'react-search-input';
import { Table } from 'react-bootstrap';
import * as admin from 'firebase-admin';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { firebaseDb } from '../server/firebase';
import * as actions from '../actions';

class Admin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchTerm: ''
    };
    this.searchUpdated = this.searchUpdated.bind(this);
  }

  renderUser = event => {
    this.setState({
      query: event.target.value
    });
  };

  componentWillMount() {
    firebase.auth().onAuthStateChanged(user => {
      if (!user) {
        this.props.history.push('/');
      } else if (user) {
        console.log('USERRRR', user);
        const thisUser = firebase.auth().currentUser;
        const uid = thisUser.uid;

        this.props.fetchCalendar(thisUser);
        this.props.fetchProfileImage(uid);
        this.props.fetchUser(thisUser);
        this.props.fetchOldStats(thisUser);
        this.props.fetchProgress(thisUser);
        this.props.loggedIn();
      }
    });
    //-----FETCH USER LIST-----
    let users = [];

    const listAllUsers = (event, nextPageToken) => {
      // List batch of users, 1000 at a time.
      admin
        .auth()
        .listUsers(1000, nextPageToken)
        .then(function(listUsersResult) {
          listUsersResult.users.forEach(function(userRecord) {
            // console.log('user', userRecord.toJSON());
            users.push(userRecord.toJSON());
          });
          // if (listUsersResult.pageToken) {
          //   // List next batch of users.
          //   this.listAllUsers(listUsersResult.pageToken);
          // }
        })
        .then(() =>
          this.setState({
            rendered: true
          })
        )
        .catch(function(error) {
          console.log('Error listing users:', error);
        });
    };

    listAllUsers();

    this.setState({
      users
    });
  }

  handleDelete = (event, uid) => {
    event.preventDefault();

    admin
      .auth()
      .deleteUser(uid)
      .then(function() {
        console.log('Successfully deleted user');
      })
      .catch(function(error) {
        console.log('Error deleting user:', error);
      });

    const newUserState = [];

    for (let i = 0; i < this.state.users.length; i++) {
      if (this.state.users[i].uid != uid) {
        newUserState.push(this.state.users[i]);
      }
    }

    this.setState({
      users: newUserState
    });
  };

  searchUpdated = term => {
    this.setState({ searchTerm: term });
  };

  renderPage = () => {
    let userAdmin;
    const KEYS_TO_FILTERS = ['uid', 'displayName', 'email'];
    const filteredUsers = this.state.users.filter(
      createFilter(this.state.searchTerm, KEYS_TO_FILTERS)
    );

    //-----VERIFY ADMIN STATUS-----
    for (let i = 0; i < this.state.users.length; i++) {
      if (this.props.state.user.uid === this.state.users[i].uid) {
        if (!this.state.users[i].customClaims) {
          this.props.history.push('/');
        } else {
          userAdmin = true;
        }
      }
    }

    //-----RENDER PAGE IF ADMIN-----
    if (userAdmin) {
      return (
        <div style={{ width: '75vw', margin: 'auto' }}>
          <SearchInput className="search-input" onChange={this.searchUpdated} />

          {this.state.rendered && (
            <Table
              striped
              bordered
              condensed
              hover
              style={{ background: 'white' }}>
              <thead>
                <tr>
                  <th>UID</th>
                  <th>Username</th>
                  <th>Email</th>
                  <th>User Type</th>
                </tr>
              </thead>
              <tbody>
                {filteredUsers.map(a => {
                  const uid = a.uid;
                  let isAdmin;

                  if (a.customClaims) {
                    if (a.customClaims.admin) {
                      isAdmin = 'admin';
                    }
                  } else {
                    isAdmin = 'user';
                  }

                  return (
                    <tr key={a.uid}>
                      <td>{a.uid}</td>
                      <td>{a.displayName}</td>
                      <td>{a.email}</td>
                      <td>{isAdmin}</td>
                      <td>
                        <button
                          onClick={event => {
                            this.handleDelete(event, uid);
                          }}>
                          X
                        </button>
                      </td>
                    </tr>
                  );
                })};
              </tbody>
            </Table>
          )}
        </div>
      );
    }
  };

  render() {
    console.log('THIS STATE ADMIN', this.state);

    return <div>{this.renderPage()}</div>;
  }
}

const mapStateToProps = state => {
  return { state };
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators(actions, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(Admin);
