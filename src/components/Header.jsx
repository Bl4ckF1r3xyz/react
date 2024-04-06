// Header.js
import React, { useState } from "react";
import { Link } from "react-router-dom";
import Modal from "./Modal";
import ModalKontact from "./ModalKontact";

export default function Header() {
  const [modalActive, setModalActive] = useState(false);
  const [kontactActive,setKontactActive]= useState(false)

  return (
    <header>
      <Link to="/">Харон</Link>
      <h3>транспортная фирма</h3>
      <h2 onClick={() => setModalActive(true)}>Калькулятор</h2>
      <Link to="/Otziv">Отзыв</Link>
      <h2 onClick={() => setKontactActive(true)}>Связаться с нами</h2>
      <Link to="/lk">Личный кабинет</Link>
      <Modal active={modalActive} setActive={setModalActive} />
      <ModalKontact active={kontactActive} setActive={setKontactActive} />
    </header>
  );
}
