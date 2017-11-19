import React, { Component } from "react";
import { firebaseApp } from "../server/firebase";
import "../css/App.css";
import QAModal from './modalQandA';
import '../css/Dashboard.css'

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
    /* Create reference to messages in Firebase Database */
    let postList = []
    let messagesRef = firebaseApp
      .database()
      .ref("messages")
      .orderByKey()
      .limitToLast(100);
    messagesRef.on("child_added", snapshot => {
      /* Update React state when message is added at Firebase Database */
      const thisPost = {}
      let message = { text: snapshot.val().question, id: snapshot.key };
      let answer = { text: snapshot.val().answers, id: snapshot.key };
      thisPost['question'] = message;
      thisPost['answers'] = answer;
      postList.push(thisPost)
      // this.setState({
      //   messages: [message].concat(this.state.messages),
      //   answers: [answer].concat(this.state.answers)
      // });
      this.setState({
        postList
      })
    })
  }

  addMessage = e => {
    e.preventDefault(); // <- prevent form submit from reloading the page
    /* Send the message to Firebase */
    firebaseApp
      .database()
      .ref("messages")
      .push({ question: this.textInput.value });
    this.textInput.value = "";
  };

  handleClickedMessage = () => {
    this.setState({ isOpen: true })
  };
  //setState is a function, (),  that we want to be an object, {}

  renderAnswers = (message) => {
    console.log("MESSAGE", message)
    const answerList = []

    for (let prop in message.answers.text) {
      answerList.push(message.answers.text[prop].answer)
    }

    return answerList.map(a => {
      return <p>{a}</p>
    })
  }

  render() {
    return (
      <div>
        <h1 className='QAtitle'>Questions and Answers Forum</h1>
        <p className='QAfont'>
          An area for 5/3/1 members to post questions regarding their workouts
          or fitness questions in general. Other members are encouraged to
          provide answers to these questions.
        </p>
        <form onSubmit={this.addMessage}>
          <input type="text" ref={el => (this.textInput = el)} />
          <input type="submit" />
          <div>
            <ul className="QandABodyFont">
              <li>
                {this.state.postList && this.state.postList.map(message => {
                  return (
                    <div>
                      <QAModal qamessage={message.question.text} firebaseId={message.question.id} />

                      {this.renderAnswers(message)}
                    </div>)
                  //button is Modal, button name is message.text and Id
                })}
              </li>
            </ul>
          </div>
        </form>
        <QAModal />
      </div>
    );
  }


}
