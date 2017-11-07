import React, { Component } from 'react';
import { Modal, Button, FormGroup, FormControl } from 'react-bootstrap';
import firebase from 'firebase';
import { NavLink } from 'react-router-dom';

export default class ForgotPassword extends Component {
  state = {
    reset: false,
    showModal: true
  };

  handleEmail = event => {
    this.setState({
      email: event.target.value
    });
  };

  close = () => {
    this.setState({ showModal: false });
  };

  open = () => {
    this.setState({ showModal: true });
  };

  isReset = () => {
    this.setState({
      reset: true
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    const emailAddress = this.state.email;

    firebase
      .auth()
      .sendPasswordResetEmail(emailAddress)
      .then(() => this.isReset())
      .catch(error => {
        alert('Please enter a valid email address');
      });
  };

  renderPage = () => {
    if (this.state.reset) {
      return (
        <div>
          {/* {alert(`An email has been sent to ${this.state.email}`)}
          {this.props.history.push('/SignIn')} */}
          <div>
            <Modal.Dialog
              show={this.state.showModal}
              onHide={this.close}
              style={{
                position: 'absolute',
                display: 'block',
                top: '30vh',
                margin: 'auto',
                transform: 'translate(-50%, -50%) !important'
              }}>
              <Modal.Header>
                <Modal.Title>
                  <h2>Password Reset</h2>
                </Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <form onSubmit={event => this.handleSubmit(event)}>
                  <h4 style={{ textAlign: 'center' }}>
                    Please check your email to reset your password
                  </h4>
                </form>
              </Modal.Body>
              <Modal.Footer>
                <NavLink to="/SignIn">Close</NavLink>
              </Modal.Footer>
            </Modal.Dialog>
          </div>
        </div>
      );
    } else {
      return (
        <div>
          <Modal.Dialog
            show={this.state.showModal}
            onHide={this.close}
            style={{
              position: 'absolute',
              display: 'block',
              top: '30vh',
              margin: 'auto',
              transform: 'translate(-50%, -50%) !important'
            }}>
            <Modal.Header>
              <Modal.Title>
                <h2>Reset your password</h2>
              </Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <form onSubmit={event => this.handleSubmit(event)}>
                <FormGroup bsSize="small">
                  <label>Enter your email here: </label>
                  <FormControl
                    onChange={event => this.handleEmail(event)}
                    placeholder="email"
                  />
                  <br />
                  <button type="submit">Reset your password!</button>
                </FormGroup>
              </form>
            </Modal.Body>
            <Modal.Footer>
              <NavLink to="/SignIn">Close</NavLink>
            </Modal.Footer>
          </Modal.Dialog>
        </div>
      );
    }
  };

  render() {
    console.log(this.state);
    return (
      <div>
        <br />
        {this.renderPage()}
      </div>
    );
  }
}
