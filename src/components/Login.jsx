import "./Login.css"
import React, { useState } from "react";
import { Link } from "react-router-dom";
import Reg from "./Regist"
export default function Modal({ active, setActive,maxWeight }) {
    const [regActive, setRegActive] = useState(false)
  return (
    <div className={active ? "modal active" : "modal"} onClick={() => setActive(false)}>
      <div className="modal_content" onClick={e => e.stopPropagation()}>
        <div className="modal__content">
        <h2>Личный кабинет</h2>
        <h3>Авторизация</h3>
        <input className="one" type="text" placeholder="Фио или Email" />
        <br />
        <input className="two" type="text" placeholder="Пароль" />
        <br />
                <button className="Aut">Авторизация</button>
                <button onClick={() => setRegActive(true)} className="Reg">Регистрация</button>
                <Reg active ={regActive} setActive={setRegActive} />
        </div>
      </div>
    </div>
  );
}
