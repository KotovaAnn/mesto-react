import { useState, useEffect } from 'react';
import editProfile from '../images/editProfile.svg';
import { api } from '../utils/api';
import Card from './Card';

function Main({ onEditProfile, onAddPlace, onEditAvatar, onCardClick }) {
  const [userName, setUserName] = useState('');
  const [userDescription, setUserDescription] = useState('');
  const [userAvatar, setUserAvatar] = useState('');
  const [cards, setCards] = useState([]);

  useEffect(() => {
    api.getInfoUser()
      .then(res => {
        setUserName(res.name);
        setUserDescription(res.about);
        setUserAvatar(res.avatar);
      })
      .catch(err => {
        console.log(err);
      });
    api.getInitialCards()
      .then(res => {
        setCards(res);
        })
      .catch(err => {
        console.log(err);
      });
  }, []);
  
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

      <section className="elements">
        <ul className="elements__group-elements">
          {
            cards.map((item) => {      
              return (          
                <Card onCardClick={onCardClick} title={item.name} link={item.link} likes={item.likes.length} key={item._id} />           
              )
            })
          }
        </ul>
      </section>

    </main>
  );
}
  
export default Main;