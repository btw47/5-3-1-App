import React, { Component } from 'react';
import {
  Popover,
  Tooltip,
  Button,
  Modal,
  OverlayTrigger
} from 'react-bootstrap';
import UpdateProfile from '../containers/UpdateProfile';

class UpdateProfileModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false
    };
  }

  getInitialState() {
    return { showModal: false };
  }

  close = () => {
    this.setState({ showModal: false });
  };

  open = () => {
    this.setState({ showModal: true });
  };

  render = () => {
    return (
      <div>
        <Button onClick={this.open}>Update Stats</Button>
        <Modal
          show={this.state.showModal}
          onHide={this.close}
          style={{
            position: 'absolute',
            display: 'block',
            top: '20vh',
            margin: 'auto',
            transform: 'translate(-50%, -50%) !important'
          }}>
          <Modal.Header>
            <Modal.Title>Update your profile</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <UpdateProfile />
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={this.close}>Close</Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  };
}

export default UpdateProfileModal;
