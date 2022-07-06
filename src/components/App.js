import { useState } from 'react';
import Header from './Header';
import Main from './Main';
import ImagePopup from './ImagePopup';
import PopupWithForm from './PopupWithForm';
import Footer from './Footer';
import RenderLoading from '../utils/utils';

function App() {
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);
  const [selectedCard, setSelectedCard] = useState({});
  const [isImagePopup, setImagePopup] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  function handleCardClick(title, link) {
    setSelectedCard({title: title, link: link});
    setImagePopup(true);
  }

  function handleEditAvatarClick() {
    setIsEditAvatarPopupOpen(true);
  }

  function handleEditProfileClick() {
    setIsEditProfilePopupOpen(true);
  }

  function handleAddPlaceClick() {
    setIsAddPlacePopupOpen(true);
  }

  function closeAllPopups() {
    setIsEditAvatarPopupOpen(false);
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setImagePopup(false);
    setIsLoading(false);
    setSelectedCard({selectedCard: ""});
  }

  function handleSaveButton() {
    setIsLoading(true);
  }

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
        title="Редактировать профиль" 
        name="profile-popup" 
        buttonName={RenderLoading(isLoading)} 
        isOpen={isEditProfilePopupOpen} 
        onClose={closeAllPopups}
        onSaveButtonClick={handleSaveButton}
        >
        <input
          id="name-input"
          className="popup__form-item popup__form-item_input_name"
          required
          type="text"
          name="inputName"
          placeholder="Имя"
          minLength={2}
          maxLength={40}
          />
        <span className="popup__error popup__error_type_name-input-error" id="name-input-error"></span>
        <input
          id="aboutself-input"
          className="popup__form-item popup__form-item_input_aboutself"
          required
          type="text"
          name="inputAboutself"
          placeholder="О себе"
          minLength={2}
          maxLength={200}
          />
        <span className="popup__error popup__error_type_aboutself-input-error" id="aboutself-input-error"></span>
      </PopupWithForm>

      <PopupWithForm 
        title="Вы уверены?" 
        name="delete-card" 
        buttonName="Да"
        />

      <PopupWithForm 
        title="Обновить аватар" 
        name="edit-avatar" 
        buttonName={RenderLoading(isLoading)}
        isOpen={isEditAvatarPopupOpen} 
        onClose={closeAllPopups}
        onSaveButtonClick={handleSaveButton}
        >
        <input
          id="avatar-link-input"
          className="popup__form-item
          popup__form-item_input_link-avatar"
          required
          type="url"
          name="inputLinkAvatar"
          placeholder="Ссылка на аватар"
          />
        <span className="popup__error popup__error_type_link-input-error popup__error_edit-avatar" id="avatar-link-input-error"></span>
      </PopupWithForm>

      <PopupWithForm 
        title="Новое место" 
        name="add-element" 
        buttonName={RenderLoading(isLoading)}
        isOpen={isAddPlacePopupOpen} 
        onClose={closeAllPopups}
        onSaveButtonClick={handleSaveButton}
        >
        <input
          id="title-input"
          className="popup__form-item popup__form-item_input_title"
          required
          type="text"
          name="inputitle"
          placeholder="Название"
          minLength={2}
          maxLength={30}
        />
          <span className="popup__error popup__error_type_title-input-error" id="title-input-error"></span>
        <input
          id="link-input"
          className="popup__form-item
          popup__form-item_input_link-picture"
          required
          type="url"
          name="inputLinkPicture"
          placeholder="Ссылка на картинку"
        />
        <span className="popup__error popup__error_type_link-input-error" id="link-input-error"></span>
      </PopupWithForm>

      <ImagePopup card={selectedCard} isOpen={isImagePopup} onClose={closeAllPopups}/>

    </div>
  );
}

export default App;