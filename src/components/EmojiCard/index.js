import './index.css'

const EmojiCard = props => {
  const {card, onClickEmoji, score} = props
  const {id, emojiName, emojiUrl} = card

  const clickEmoji = () => {
    onClickEmoji(id)
  }

  return (
    <li>
      <button className="card" onClick={clickEmoji} type="button">
        <img src={emojiUrl} className="emoji" alt={emojiName} />
      </button>
    </li>
  )
}

export default EmojiCard
