import './index.css'

const NavBar = props => {
  const {isGameOn, score, topScore, clickedEmojisList} = props
  const obtainedScore = clickedEmojisList.length
  let highestScore = 0
  if (obtainedScore >= topScore) {
    highestScore = obtainedScore
  }

  if (isGameOn) {
    return (
      <nav className="nav-bar">
        <div className="logo-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/game-logo-img.png"
            alt="emoji logo"
            className="logo"
          />
          <h1 className="name">Emoji Game</h1>
        </div>
        <div className="score-container">
          <p className="score">Score: {obtainedScore}</p>
          <p className="score">Top Score: {topScore}</p>
        </div>
      </nav>
    )
  }
  return (
    <nav className="nav-bar">
      <div className="logo-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/game-logo-img.png"
          alt="emoji logo"
          className="logo"
        />
        <p className="name">Emoji Game</p>
      </div>
    </nav>
  )
}

export default NavBar
