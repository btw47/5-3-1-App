import React, { Component } from "react";
import { firebaseApp } from "../server/firebase"
import PropTypes from "prop-types";
import {
  Button,
  Modal
} from 'react-bootstrap';

export default class QAModal extends Component {
  constructor(props) {
    super(props)
    this.state = { isOpen: false }
  }

  showModal = () => {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }


  answerQuestioninModal = e => {
    let answerRef = firebaseApp.database().ref("messages/" + this.props.firebaseId + "/answers/")
    answerRef.push({ answer: this.refs.textarea.value }).then(() => this.props.fetchAnswer()
    );
    this.setState({
      isOpen: this.state.isClosed
    })
  }


  render() {
    return (
      <div>
        <Button onClick={this.showModal} bsStyle="primary">
          <h4>{this.props.qamessage}</h4>
        </Button>
        <Modal
          show={this.state.isOpen}
          onHide={this.close}
          style={{
            position: 'absolute',
            display: 'block',
            top: '25vh',
            margin: 'auto',
            transform: 'translate(-50%, -50%) !important'
          }}>
          <Modal.Header>
            <Modal.Title>Answer the Question</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <input type="textarea" ref="textarea" />
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={this.answerQuestioninModal}>Answer Question</Button>
            <Button onClick={this.showModal}>Close this box</Button>
          </Modal.Footer>
        </Modal>
      </div >
    );
  }
}

QAModal.propTypes = {
  //onClose: PropTypes.func.isRequired,
  show: PropTypes.bool,
  children: PropTypes.node
}

// onClick={()=>this.showModal()}></button>
//the extra parenthesis+fat arrow make this not run when the page loads