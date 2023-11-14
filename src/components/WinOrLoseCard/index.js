import './index.css'

const WinOrLossCard = props => {
  const {isGameOn, winOrLoss, score, clickedEmojisList, startGame} = props
  const imageUlr = winOrLoss
    ? 'https://assets.ccbp.in/frontend/react-js/won-game-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/lose-game-img.png'
  const gameResult = winOrLoss ? 'You Won' : 'You Lose'
  const scoreResult = winOrLoss ? 'Best Score' : 'Score'

  const totalLength = clickedEmojisList.length

  const obtainedScore = winOrLoss ? 12 : totalLength

  const restartGame = () => {
    startGame(obtainedScore)
  }

  return (
    <div className="winOrLoss-container">
      <div className="results">
        <h1 className="heading">{gameResult}</h1>
        <p className="score-name">{scoreResult}</p>
        <p className="game-score">{obtainedScore}/12</p>
        <button className="button" type="button" onClick={restartGame}>
          Play Again
        </button>
      </div>
      <img src={imageUlr} className="result-image" alt="win or lose" />
    </div>
  )
}
export default WinOrLossCard
