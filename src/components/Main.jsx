import { useState, useEffect } from 'react';
import { api } from '../utils/Api.js';
import Card from './Card.jsx';

function Main({ onEditProfile, onAddPlace, onEditAvatar, onCardClick }) {
  const [userName, setUserName] = useState('');
  const [userDescription, setUserDescription] = useState('');
  const [userAvatar, setUserAvatar] = useState('');
  const [cards, setCards] = useState([]);

  const fetchData = async () => {
    try {
      const res = await api.getUserInfo();
      setUserName(res.name);
      setUserDescription(res.about);
      setUserAvatar(res.avatar);
    } catch (e) {
      console.warn(e);
    }
  };

  const fetchCards = async () => {
    try {
      const res = await api.getInitialCards();
      setCards(res);
    } catch (e) {
      console.warn(e);
    }
  };

  useEffect(() => {
    fetchData();
    fetchCards();
  }, []);

  return (
    <main>
      <section className="profile">
        <div className="profile__avatar" onClick={onEditAvatar}>
          <img className="profile__avatar-img" src={userAvatar} alt="аватар" />
        </div>
        <div className="profile__info">
          <h1 className="profile__name">{userName ?? 'Elisei Tatarenko'}</h1>
          <p className="profile__about">{userDescription ?? 'Frontend developer'}</p>
          <button
            className="button profile__edit-button"
            type="button"
            onClick={onEditProfile}
          ></button>
        </div>
        <button className="button profile__add-button" type="button" onClick={onAddPlace}></button>
      </section>
      <section className="cards">
        {cards.map(card => (
          <Card key={card._id} card={card} onCardClick={onCardClick} />
        ))}
      </section>
    </main>
  );
}

export default Main;
