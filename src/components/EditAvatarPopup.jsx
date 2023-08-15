import PopupWithForm from './PopupWithForm';
import { useRef } from 'react';

function EditAvatarPopup({ isOpen, onClose, onUpdateAvatar }) {
  const avatarRef = useRef('');

  function handleSubmit(e) {
    e.preventDefault();
    onUpdateAvatar({
      avatar: avatarRef.current.value
    });
    avatarRef.current.value = '';
  }

  return (
    <PopupWithForm
      title={'Обновить аватар'}
      name={'avatar'}
      isOpen={isOpen}
      onClose={onClose}
      buttonText={'Подтвердить'}
      onSubmit={handleSubmit}
    >
      <fieldset className="popup__form-fieldset">
        <input
          type="url"
          className="popup__form-input"
          placeholder="Ссылка на аватар"
          name="avatar"
          required
          ref={avatarRef}
        />
        <span className="error-message avatar-error"></span>
      </fieldset>
    </PopupWithForm>
  );
}

export default EditAvatarPopup;
