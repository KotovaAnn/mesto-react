import React from 'react';

function PopupWithForm({ title, name, buttonName, children, isOpen, onClose }) {

  return (
    <div className={`popup popup_${name} ${(isOpen === true) ? "popup_opened" : ""}`}>
      <div className={`popup__content popup__content_${name}`}>
        <form className="popup__form" name={name}>
          <h2 className="popup__title">{title}</h2>
          <button className="button popup__close-btn" type="button" onClick={onClose}></button>
          {children}
          <button className="popup__save-btn" type="submit">{buttonName}</button>
        </form>
      </div>
    </div>
  )
}
  
export default PopupWithForm;