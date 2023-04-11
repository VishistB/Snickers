import React, { Component } from 'react';
import styles from './feedback.module.css';

class Feedback extends Component {
  state = {
    isFeedBack: true,
    redirect: false, // new state to handle redirection
  };

  onChangeResponse = () => {
    this.setState({ isFeedBack: false, redirect: true }); // set redirect to true when feedback is given
  };

  originPage = () => {
    const resources = {
      emojis: [
        {
          id: 0,
          name: "Was the speaker's audio clear",
          imageUrl: 'https://assets.ccbp.in/frontend/react-js/sad-emoji-img.png',
        },
        {
          id: 1,
          name: 'Was the session productive',
          imageUrl: 'https://assets.ccbp.in/frontend/react-js/none-emoji-img.png',
        },
        {
          id: 2,
          name: 'On a scale 1-5 will you join again',
          imageUrl: 'https://assets.ccbp.in/frontend/react-js/happy-emoji-img.png',
        },
      ],
    };

    const { emojis } = resources;
    return (
      <div className={styles.emojiscontainer}>
        <h1>
          How satisfied are you with this
          <br />
          Speaker Session?
        </h1>
        <ul className={styles.emojicontainer}>
          {emojis.map((emoji) => (
            <li key={emoji.id} className="list-container">
              <button
                type="button"
                onClick={this.onChangeResponse}
                className={styles.button}
              >
                <img src={emoji.imageUrl} alt={emoji.name} className="img" />
                <p>{emoji.name}</p>
              </button>
            </li>
          ))}
        </ul>
      </div>
    );
  };

  feedBackPage = () => {
    const { resources } = this.props;
    return (
      <div className={styles.tqcontainer}>
        <img src="https://assets.ccbp.in/frontend/react-js/love-emoji-img.png" alt="love emoji" />

        <h1>Thank You</h1>
        <p>
          we will use your feedback to improve our
          <br />
          performance.
        </p>
      </div>
    );
  };

  render() {
    const { isFeedBack, redirect } = this.state;

    if (redirect) { 
      window.location.href = '/Dashboard'; 
    }

    return (
      <div className={styles.bgcontainer}>
        <div className={styles.subcontainer}>
          {isFeedBack ? this.originPage() : this.feedBackPage()}
        </div>
      </div>
    );
  }
}

export default Feedback;
