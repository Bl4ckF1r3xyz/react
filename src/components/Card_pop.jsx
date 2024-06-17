import React from "react"
import "./Regist.css"
export default function Modal({ active, setActive,maxWeight }) {
  return (
    <div className={active ? "modal active" : "modal"} onClick={() => setActive(false)}>
      <div className="modal_content" onClick={e => e.stopPropagation()}>
        <div className="modal__content">
        <h2>Личный кабинет</h2>
        <h3>Регистрация</h3>
        <input className="one" type="text" placeholder="Фио" />
        <br />
        <input className="one" type="text" placeholder="Email" />
        <br />
        <input className="one" type="text" placeholder="Номер телефона" />
        <br />
        <input className="one" type="text" placeholder="Представителем какой компании вы являетесь" />
        <br />
        <input className="one" type="text" placeholder="Пароль" />
        <br />
        <input className="one" type="text" placeholder="Пароль еще раз" />
        <input type="checkbox" value="email" />
        <label className="icq" for="contactChoice5">Ставя галочку, вы подтверждаете, что ознакомились с условиями обратботки персональных данных и принимаете их.</label>
        <br />
                <button className="Auto">Зарегистрироваться</button>
        </div>
      </div>
    </div>
  );
}
