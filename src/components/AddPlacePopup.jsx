import { useEffect, useState } from 'react';
import PopupWithForm from './PopupWithForm';

function AddPlacePopup({ isOpen, onClose, onAddPlace }) {
  const [name, setName] = useState('');
  const [link, setLink] = useState('');

  function handleNameChange(e) {
    setName(e.target.value);
  }

  function handleLinkChange(e) {
    setLink(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    onAddPlace({
      name: name,
      link: link
    });
  }

  useEffect(() => {
    setName('');
    setLink('');
  }, [isOpen]);

  return (
    <PopupWithForm
      title={'Новое место'}
      name={'card'}
      isOpen={isOpen}
      onClose={onClose}
      buttonText={'Добавить'}
      onSubmit={handleSubmit}
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
          value={name || ''}
          onChange={handleNameChange}
        />
        <span className="error-message name-error"></span>
        <input
          type="url"
          className="popup__form-input"
          placeholder="Ссылка на картинку"
          name="link"
          required
          value={link || ''}
          onChange={handleLinkChange}
        />
        <span className="error-message link-error"></span>
      </fieldset>
    </PopupWithForm>
  );
}

export default AddPlacePopup;
