import React, { Component } from 'react';
import { Table } from 'react-bootstrap';
import admin from 'firebase-admin';

class Admin extends Component {
  renderUser = event => {
    this.setState({
      query: event.target.value
    });
  };

  componentWillMount() {
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
        .catch(function(error) {
          console.log('Error listing users:', error);
        });
    };

    listAllUsers();

    this.setState({
      users
    });
  }

  renderUsers = event => {
    event.preventDefault();

    let newList = this.state.users.map(a => {
      const uid = a.uid;

      return (
        <tr key={a.uid}>
          <td>{a.uid}</td>
          <td>{a.displayName}</td>
          <td>{a.email}</td>
          {/* <td>
            <button
              onClick={(event, uid) => {
            this.handleDelete(event, uid);
              }}>
              X
            </button>
          </td> */}
        </tr>
      );
    });

    this.setState({
      renderedList: newList
    });
  };

  handleDelete = event => {
    event.preventDefault();
    console.log('UID TO DELETE', this.state.uid);
    const uid = this.state.uid;
    admin
      .auth()
      .deleteUser(uid)
      .then(function() {
        console.log('Successfully deleted user');
      })
      .catch(function(error) {
        console.log('Error deleting user:', error);
      });
  };

  handleUID = event => {
    this.setState({
      uid: event.target.value
    });
  };

  render() {
    console.log('THIS STATE ADMIN', this.state);
    return (
      <div style={{ width: '75vw', margin: 'auto' }}>
        <form>
          <button onClick={event => this.renderUsers(event)}>Load Users</button>
          <input type="text" placeholder="enter user id here" />
        </form>
        <form onSubmit={event => this.handleDelete(event)}>
          <input
            type="text"
            placeholder="enter uid to delete"
            onChange={event => this.handleUID(event)}
          />
        </form>

        {this.state.renderedList && (
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
                <th>Delete User</th>
              </tr>
            </thead>
            <tbody>{this.state.renderedList}</tbody>
          </Table>
        )}
      </div>
    );
  }
}

export default Admin;
