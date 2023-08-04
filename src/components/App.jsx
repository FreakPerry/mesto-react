import './App.css';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import PopupWithForm from './PopupWithForm';
import ImagePopup from './ImagePopup';
import { useState } from 'react';

function App() {
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);
  const [selectedCard, setSelectedCard] = useState({});
  const [isImageOpen, setIsImageOpen] = useState(false);

  const handleEditAvatarClick = () => {
    setIsEditAvatarPopupOpen(true);
  };

  const handleEditProfileClick = () => {
    setIsEditProfilePopupOpen(true);
  };

  const handleAddPlaceClick = () => {
    setIsAddPlacePopupOpen(true);
  };

  const handleCardClick = card => {
    setSelectedCard(card);
    setIsImageOpen(true);
  };

  const closeAllPopups = () => {
    setIsEditAvatarPopupOpen(false);
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setIsImageOpen(false);
  };

  return (
    <div className="page">
      <Header />
      <Main
        onEditProfile={handleEditProfileClick}
        onAddPlace={handleAddPlaceClick}
        onEditAvatar={handleEditAvatarClick}
        onCardClick={handleCardClick}
      />
      <Footer />
      <PopupWithForm
        title={'Редактировать профиль'}
        name={'profile'}
        isOpen={isEditProfilePopupOpen}
        onClose={closeAllPopups}
        buttonText={'Сохранить'}
      >
        <fieldset className="popup__form-fieldset">
          <input
            type="text"
            className="popup__form-input"
            placeholder="Ваше Имя"
            name="name"
            minLength="2"
            maxLength="40"
            required
          />
          <span className="error-message name-error"></span>
          <input
            type="text"
            className="popup__form-input"
            placeholder="Место Работы"
            name="about"
            minLength="2"
            maxLength="200"
            required
          />
          <span className="error-message about-error"></span>
        </fieldset>
      </PopupWithForm>
      <PopupWithForm
        title={'Новое место'}
        name={'card'}
        isOpen={isAddPlacePopupOpen}
        onClose={closeAllPopups}
        buttonText={'Добавить'}
      >
        <fieldset className="popup__form-fieldset">
          <input
            type="text"
            className="popup__form-input"
            placeholder="Название"
            name="name"
            minLength="2"
            maxLength="30"
            required
          />
          <span className="error-message name-error"></span>
          <input
            type="url"
            className="popup__form-input"
            placeholder="Ссылка на картинку"
            name="link"
            required
          />
          <span className="error-message link-error"></span>
        </fieldset>
      </PopupWithForm>
      <PopupWithForm
        title={'Вы уверены?'}
        name={'confirm'}
        onClose={closeAllPopups}
        buttonText={'Да'}
      >
        <button type="submit" className="popup__save-button">
          Да
        </button>
      </PopupWithForm>
      <PopupWithForm
        title={'Обновить аватар'}
        name={'avatar'}
        isOpen={isEditAvatarPopupOpen}
        onClose={closeAllPopups}
        buttonText={'Подтвердить'}
      >
        <fieldset className="popup__form-fieldset">
          <input
            type="url"
            className="popup__form-input"
            placeholder="Ссылка на аватар"
            name="avatar"
            required
          />
          <span className="error-message avatar-error"></span>
        </fieldset>
      </PopupWithForm>
      <ImagePopup isOpen={isImageOpen} onClose={closeAllPopups} card={selectedCard} />
    </div>
  );
}

export default App;
