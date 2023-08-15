import { useContext, useEffect, useState } from 'react';
import PopupWithForm from './PopupWithForm';
import CurrentUserContext from '../contexts/CurrentUserContext';

function EditProfilePopup({ isOpen, onClose, onUpdateUser }) {
  const currentUser = useContext(CurrentUserContext);
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');

  function handleNameChange(e) {
    setName(e.target.value);
  }

  function handleDescriptionChange(e) {
    setDescription(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    onUpdateUser({ name, about: description });
  }

  useEffect(() => {
    setName(currentUser.name);
    setDescription(currentUser.about);
  }, [currentUser, isOpen]);

  return (
    <PopupWithForm
      title={'Редактировать профиль'}
      name={'profile'}
      isOpen={isOpen}
      onClose={onClose}
      buttonText={'Сохранить'}
      onSubmit={handleSubmit}
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
          value={name || ''}
          onChange={handleNameChange}
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
          value={description || ''}
          onChange={handleDescriptionChange}
        />
        <span className="error-message about-error"></span>
      </fieldset>
    </PopupWithForm>
  );
}

export default EditProfilePopup;
