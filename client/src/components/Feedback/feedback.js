import React from 'react'
import './feedback.css'
import {Component} from 'react'



class Feedback extends Component {
  state = {
    isFeedBack: true,
  }

  onChangeResponse = () => {
    this.setState({isFeedBack: false})
  }

  originPage = () => {
    const resources = {
        emojis: [
          {
            id: 0,
            name: '1',
            imageUrl: 'https://assets.ccbp.in/frontend/react-js/sad-emoji-img.png',
          },
          {
            id: 1,
            name: '2',
            imageUrl: 'https://assets.ccbp.in/frontend/react-js/none-emoji-img.png',
          },
          {
            id: 2,
            name: '3',
            imageUrl: 'https://assets.ccbp.in/frontend/react-js/happy-emoji-img.png',
          },
        ],
        
      }


      
    
    const {emojis} = resources
    return (
      <div className="emojis-container">
        <h1>
          How satisfied are you with this
          <br />
           Speaker Session?
        </h1>
        <ul className="emoji-container">
          {emojis.map(emoji => (
            <li key={emoji.id} className="list-container">
              <button
                type="button"
                onClick={this.onChangeResponse}
                className="button"
              >
                <img src={emoji.imageUrl} alt={emoji.name} className="img" />
                <p>{emoji.name}</p>
              </button>
            </li>
          ))}
        </ul>
      </div>
    )
  }

  feedBackPage = () => {
    const {resources} = this.props
    return (
      <div className="tq-container">
        <img src='https://assets.ccbp.in/frontend/react-js/love-emoji-img.png' alt="love emoji" />

        <h1>Thank You</h1>
        <p>
          we will use your feedback to improve our 
          <br />
          performance.
        </p>
      </div>
    )
  }

  render() {
    const {isFeedBack} = this.state
    return (
      <div className="bg-container">
        <div className="sub-container">
          {isFeedBack ? this.originPage() : this.feedBackPage()}
        </div>
      </div>
    )
  }
}

export default Feedback


  
