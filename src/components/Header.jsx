import React, { useState } from "react";
import { Link } from "react-router-dom";
import Modal from "./Calc";
import ModalKontact from "./ModalKontact";
import Login from "./Login";
import "./Header.css"

export default function Header() {
  const [modalActive, setModalActive] = useState(false);
  const [kontactActive,setKontactActive]= useState(false)
  const [LoginActive, setLoginActive]= useState(false)

  return (
    <header>
      <Link to="/">Харон <h3>транспортная фирма</h3></Link>
      <h2 onClick={() => setModalActive(true)}>Калькулятор</h2>
      <Link to="/Otziv">Отзывы</Link>
      <h2 onClick={() => setKontactActive(true)}>Связаться с нами</h2>
      <h2 onClick={() => setLoginActive(true)}>Личный кабинет</h2>
      <Modal active={modalActive} setActive={setModalActive} />
      <ModalKontact active={kontactActive} setActive={setKontactActive} />
      <Login active ={LoginActive} setActive={setLoginActive} />
    </header>
  );
}
