import React from 'react';

function PopupWithForm({ title, name, buttonName, children, isOpen, onClose, onSaveButtonClick }) {
  return (
    <div className={`popup popup_${name} ${(isOpen === true) ? "popup_opened" : ""}`}>
      <div className={`popup__content popup__content_${name}`}>
        <form className="popup__form" name={name}>
          <h2 className="popup__title">{title}</h2>
          {children}
          <button className="popup__save-btn" type="submit" onSubmit={onSaveButtonClick}>{buttonName}</button>
          <button className="button popup__close-btn" type="button" onClick={onClose}></button>
        </form>
      </div>
    </div>
  )
}
  
export default PopupWithForm;