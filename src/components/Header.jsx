import React, { useState } from "react";
import { Link } from "react-router-dom";
import Modal from "./Calc";
import ModalKontact from "./ModalKontact";
import "./Header.css"

export default function Header() {
  const [modalActive, setModalActive] = useState(false);
  const [kontactActive,setKontactActive]= useState(false)

  return (
    <header>
      <Link to="/">Харон <h3>транспортная фирма</h3></Link>
      <h2 onClick={() => setModalActive(true)}>Калькулятор</h2>
      <Link to="/Otziv">Отзыв</Link>
      <h2 onClick={() => setKontactActive(true)}>Связаться с нами</h2>
      <Link to="/lk">Личный кабинет</Link>
      <Modal active={modalActive} setActive={setModalActive} />
      <ModalKontact active={kontactActive} setActive={setKontactActive} />
    </header>
  );
}
