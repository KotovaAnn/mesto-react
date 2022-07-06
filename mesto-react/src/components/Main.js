import React, { Children } from 'react';
import editProfile from '../images/editProfile.svg';

function Main({ onEditProfile, onAddPlace, onEditAvatar, userAvatar, userName, userDescription, children}) {
  return (
    <main className="content">
      <section className="profile">
        <div className="profile__left-block-profile">
          <div className="profile__edit-avatar" onClick={onEditAvatar}>
            <img src={editProfile} alt="Иконка редактировать" />
          </div>
          <img className="profile__avatar" src={userAvatar} alt="Аватар профиля" />
          <div className="profile__info">
            <div className="profile__info-block">
              <h1 className="profile__title">{userName}</h1>
              <button className="button profile__edit-button" type="button" onClick={onEditProfile}></button>
            </div>
            <p className="profile__subtitle">{userDescription}</p>
          </div>
        </div>

        <button className="button profile__add-button" type="button" onClick={onAddPlace}></button>
      </section>

      <section class="elements">
        <ul class="elements__group-elements">
          {children}
        </ul>
      </section>

    </main>
  );
}
  
export default Main;