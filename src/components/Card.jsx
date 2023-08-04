function Card({ card, onCardClick }) {
  function handleClick() {
    onCardClick(card);
  }

  return (
    <article className="card">
      <img
        style={{ backgroundImage: `url(${card.link})` }}
        className="card__image"
        src={card.link}
        alt={card.name}
        onClick={handleClick}
      />
      <div className="card__info">
        <h2 className="card__description">{card.name}</h2>
        <div className="card__like-container">
          <button className="button card__like-button" type="button"></button>
          <p className="card__like-counter">{card.likes.length}</p>
        </div>
      </div>
      <button className="card__delete-button button" type="button"></button>
    </article>
  );
}

export default Card;
