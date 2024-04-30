import React from "react";
import "./ModalKontact.css"

export default function ModalKontact({ active, setActive }) {
  return (
    <div className={active ? "modal active" : "modal"} onClick={() => setActive(false)}>
      <div className="modal_content" onClick={e => e.stopPropagation()}>
        <div className="modal__content">
        <h2>Здесь вы можете связаться с нами.</h2>
        <input className="one" type="text" placeholder="Фио?" />
        <input className="two" type="text" placeholder="Номер?" />
        <input className="three" type="text" placeholder="E-mail" />
        <textarea className="four" contenteditable="true" type="text" placeholder="Цель обращения" /> 
        
        <button className="Otp" onClick={() => setActive(false)}>Отправить</button>
        </div>
      </div>
    </div>
  );
}