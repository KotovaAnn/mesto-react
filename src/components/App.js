import React from 'react';
import Header from './Header';
import Main from './Main';
import Card from './Card';
import ImagePopup from './ImagePopup';
import PopupWithForm from './PopupWithForm';
import Footer from './Footer';
import { api } from '../utils/api';

function App() {
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false);
  const [userName, setUserName] = React.useState('');
  const [userDescription, setUserDescription] = React.useState('');
  const [userAvatar, setUserAvatar] = React.useState('');
  const [cards, setCards] = React.useState([]);
  const [selectedCard, setSelectedCard] = React.useState({});
  const [isImagePopup, setImagePopup] = React.useState(false);

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
    setSelectedCard({selectedCard: ""});
  }

  React.useEffect(() => {
    api.getInfoUser()
      .then(res => {
        setUserName(res.name);
        setUserDescription(res.about);
        setUserAvatar(res.avatar);
      })
      .catch(err => {
        console.log(err);
      })
  }, []);

  React.useEffect(() => {
    api.getInitialCards()
    .then(res => {
      setCards(res);
      })
    .catch(err => {
      console.log(err);
    })
  }, []);

  return (
    
    <div className="page">
      <Header />
      <Main userName={userName} userDescription={userDescription} userAvatar={userAvatar} onEditProfile={handleEditProfileClick} onAddPlace={handleAddPlaceClick} onEditAvatar={handleEditAvatarClick}>  
        <ul className="elements__group-elements">
          {
            cards.map((item) => {      
              return (          
                <Card onCardClick={handleCardClick} title={item.name} link={item.link} likes={item.likes.length} />           
              )
            })
          }
        </ul>  
      </Main>            
      <Footer />

      <PopupWithForm title="Редактировать профиль" name="profile-popup" buttonName="Сохранить" isOpen={isEditProfilePopupOpen} onClose={closeAllPopups}>
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

      <PopupWithForm title="Вы уверены?" name="delete-card" buttonName="Да"/>

      <PopupWithForm title="Обновить аватар" name="edit-avatar" buttonName="Сохранить" isOpen={isEditAvatarPopupOpen} onClose={closeAllPopups}>
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

      <PopupWithForm title="Новое место" name="add-element" buttonName="Сохранить" isOpen={isAddPlacePopupOpen} onClose={closeAllPopups}>
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