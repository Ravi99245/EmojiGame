/* 
Quick Tip 

- Use the below function in the EmojiGame Component to shuffle the emojisList every time when an emoji is clicked.

const shuffledEmojisList = () => {
  const {emojisList} = this.props
  return emojisList.sort(() => Math.random() - 0.5)
}

*/

// Write your code here.

import {Component} from 'react'

import {v4 as uuidV4} from 'uuid'
import NavBar from '../NavBar'
import EmojiCard from '../EmojiCard'
import WinOrLossCard from '../WinOrLoseCard'

import './index.css'

class EmojiGame extends Component {
  state = {
    isGameOn: true,
    clickedEmojisList: [],
    score: 0,
    topScore: 0,
    winOrLoss: false,
  }

  setScores = () => {
    const {clickedEmojisList} = this.state
    this.setState({score: clickedEmojisList.length})
  }

  startGame = obtainedScore => {
    const {topScore} = this.state
    if (obtainedScore >= topScore) {
      this.setState({
        topScore: obtainedScore,
        score: 0,
        isGameOn: true,
        winOrLoss: false,
        clickedEmojisList: [],
      })
    }
  }

  renderNavBar = () => {
    const {isGameOn, score, topScore, clickedEmojisList} = this.state
    return (
      <NavBar
        key={uuidV4()}
        clickedEmojisList={clickedEmojisList}
        score={score}
        topScore={topScore}
        isGameOn={isGameOn}
      />
    )
  }

  renderEmojiCards = emojisList => {
    const {isGameOn, winOrLoss, score, clickedEmojisList, topScore} = this.state
    if (isGameOn) {
      return (
        <ul className="emoji-container">
          {emojisList
            .sort(() => Math.random() - 0.5)
            .map(eachItem => (
              <EmojiCard
                key={eachItem.id}
                card={eachItem}
                score={score}
                onClickEmoji={this.onClickEmoji}
              />
            ))}
        </ul>
      )
    }
    return (
      <div className="winOrLossCard">
        <WinOrLossCard
          key={uuidV4()}
          isGameOn={isGameOn}
          winOrLoss={winOrLoss}
          score={score}
          topScore={topScore}
          clickedEmojisList={clickedEmojisList}
          startGame={this.startGame}
        />
      </div>
    )
  }

  onClickEmoji = id => {
    const {emojisList} = this.props
    const {clickedEmojisList} = this.state
    const isEmojiPresent = clickedEmojisList.includes(id)
    const clickcedEmojisLength = clickedEmojisList.length
    console.log(id)
    console.log(emojisList)

    if (isEmojiPresent) {
      this.setScores()
      this.setState(prevState => ({
        isGameOn: !prevState.isGameOn,
      }))
    } else {
      if (emojisList.length - 1 === clickcedEmojisLength) {
        this.setState(prevState => ({
          isGameOn: !prevState.isGameOn,
          winOrLoss: true,
          score: emojisList.length,
          clickedEmojisList: [...prevState.clickedEmojisList, id],
        }))
        this.setScores()
      }
      this.setState(prevState => ({
        clickedEmojisList: [...prevState.clickedEmojisList, id],
        score: clickedEmojisList.length,
      }))
    }
  }

  render() {
    const {isGameOn, clickedEmojisList, score, topScore} = this.state
    console.log(isGameOn, clickedEmojisList, score, topScore)
    const {emojisList} = this.props
    const playedScore = clickedEmojisList.length

    return (
      <div className="bg-container">
        {this.renderNavBar()}
        <div className="card-container">
          {this.renderEmojiCards(emojisList)}
        </div>
      </div>
    )
  }
}

export default EmojiGame
