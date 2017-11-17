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
    answerRef.push({ answer: this.refs.textarea.value });
    this.setState({
      isOpen: this.state.isClosed
    })
  }


  render() {
    // Render nothing if the "show" prop is false
    // if (!this.props.show) {
    //   return null;
    // }

    // The gray background
    // const backdropStyle = {
    //   postiotion: "fixed",
    //   top: 0,
    //   bottom: 0,
    //   left: 0,
    //   right: 0,
    //   backgroundColor: "rgba(0,0,0,0.3)",
    //   padding: 50
    // };

    // // The modal "window"
    // const modalStyle = {
    //   backgroundColor: "#fff",
    //   borderRadius: 5,
    //   maxWidth: 500,
    //   minHeight: "0 auto",
    //   padding: 30
    // };


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
            <Button onClick={this.showModal}>Close this stupid fucking box</Button>
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