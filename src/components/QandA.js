import React, { Component } from "react";
import { firebaseApp } from "../server/firebase";
import "../css/App.css";
import QAModal from "./modalQandA";
import { Button, ButtonToolbar } from "react-bootstrap";
import "./QandA.css";
import $ from "jquery";

export default class QandA extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false
    };
  }

  //Every component has a state object and a props object. State is set using the setState method.
  //Calling setState triggers UI updates and is the bread and butter of React's interactivity.

  componentWillMount() {
    this.fetchAnswer()
  }

  fetchAnswer = () => {
    /* Create reference to messages in Firebase Database */
    let postList = [];
    let messagesRef = firebaseApp
      .database()
      .ref("messages")
      .orderByKey()
      .limitToLast(100);
    messagesRef.on("child_added", snapshot => {
      /* Update React state when message is added at Firebase Database */
      const thisPost = {};
      let message = { text: snapshot.val().question, id: snapshot.key };
      let answer = { text: snapshot.val().answers, id: snapshot.key };
      thisPost["question"] = message;
      thisPost["answers"] = answer;
      postList.push(thisPost);
      this.setState({
        postList
      });
    });
  }

  addMessage = e => {
    e.preventDefault(); // <- prevent form submit from reloading the page
    /* Send the message to Firebase */
    let questCheck;
    const questionArray = this.textInput.value.split("").lastIndexOf("?");

    if (questionArray === -1) {
      questCheck = this.textInput.value + "?";
    } else {
      questCheck = this.textInput.value;
    }
    console.log("QARR", questCheck);

    firebaseApp
      .database()
      .ref("messages")
      .push({ question: questCheck });
    this.textInput.value = "";
  };

  handleClickedMessage = () => {
    this.setState({ isOpen: true });
  };
  //setState is a function, (),  that we want to be an object, {}

  renderAnswers = message => {
    console.log("MESSAGE", message);
    const answerList = [];

    for (let prop in message.answers.text) {
      answerList.push(message.answers.text[prop].answer);
    }

    return answerList.map(a => {
      return <p>{a}</p>;
    });
  };

  render() {
    return (
      <div className="container">
        <div className="centerhomepage">
          <div className="card">
            <h1>Questions and Answers Forum</h1>
            <p>
              An area for 5/3/1 members to post questions regarding their
              workouts or fitness questions in general. Other members are
              encouraged to provide answers to these questions.
            </p>
          </div>
        </div>
        <br />
        <div className="card">
          <ul className="nobullet">
            <li>
              {this.state.postList &&
                this.state.postList.map(message => {
                  return (
                    <div className="faq-c">
                      <div class="faq-q">
                        <span class="faq-t" />
                        <QAModal
                          fetchAnswer={this.fetchAnswer}
                          qamessage={message.question.text}
                          firebaseId={message.question.id}
                        />
                      </div>
                    );
                    //button is Modal, button name is message.text and Id
                  })}
              </li>
            </ul>
            {/* <ButtonToolbar className="centerhomepage">
              <div className="btnwrap">
                <Button
                  bsSize="medium"
                  type="button"
                  className="coolbtn"
                >
                Answers
                </Button>
              </div>
            </ButtonToolbar> */}
          </div>
        </div>
      </div>
    );
  }
}
