import React, { Component } from "react";
import { firebaseApp } from "../server/firebase";
import "../css/App.css";
import QAModal from './modalQandA'

export default class QandA extends Component {
  constructor(props) {
    super(props);
    this.state = {
      messages: [],
      isOpen: false
    };

  }

  //Every component has a state object and a props object. State is set using the setState method.
  //Calling setState triggers UI updates and is the bread and butter of React's interactivity.

  componentWillMount() {
    /* Create reference to messages in Firebase Database */
    let messagesRef = firebaseApp
      .database()
      .ref("messages")
      .orderByKey()
      .limitToLast(100);
    messagesRef.on("child_added", snapshot => {
      /* Update React state when message is added at Firebase Database */
      let message = { text: snapshot.val(), id: snapshot.key };
      this.setState({ messages: [message].concat(this.state.messages) });
    });
  }

  addMessage = e => {
    e.preventDefault(); // <- prevent form submit from reloading the page
    /* Send the message to Firebase */
    firebaseApp
      .database()
      .ref("messages")
      .push(this.textInput.value);
    this.textInput.value = "";
  };

  handleClickedMessage = () => {
    this.setState({ isOpen: true })
  };
  //setState is a function, (),  that we want to be an object, {}
  render() {
    return (
      <div>
        <h1>Questions and Answers Forum</h1>
        <p>
          An area for 5/3/1 members to post questions regarding their workouts
          or fitness questions in general. Other members are encouraged to
          provide answers to these questions.
        </p>
        <form onSubmit={this.addMessage}>
          <input type="text" ref={el => (this.textInput = el)} />
          <input type="submit" />
          <div>
            <ul className="QandABodyFont">
              {this.state.messages.map(message => (
                // <div key={message.id}>
                //   <label
                //     className="QandAHover"
                //     onClick={this.handleClickedMessage}
                //   >
                //     <li>{message.text}</li>
                //   </label>
                // </div>
                <QAModal qamessage={message.text} />
              ))}
            </ul>
          </div>
        </form>

        <QAModal />
      </div>
    );
  }


}
