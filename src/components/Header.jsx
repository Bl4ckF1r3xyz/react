// Header.js
import React, { useState } from "react";
import { Link } from "react-router-dom";
import Modal from "./Modal";
import ModalKontact from "./ModalKontact";

export default function Header() {
  const [modalActive, setModalActive] = useState(true);
  const [modalZActive, setModalZActive] = useState(true);

  return (
    <header>
      <Link to="/">Харон</Link>
      <h3>транспортная фирма</h3>
      <h2 onClick={() => setModalActive(true)}>Калькулятор</h2>
      <Link to="/Otziv">Отзыв</Link>
      <h2 onClick={() => setModaZlActive(true)}>Связаться с нами</h2>
      <Link to="/lk">Личный кабинет</Link>
      <Modal active={modalActive} setActive={setModalActive} />
      <Modal active={modalZActive} setActive={setModalZActive} />
    </header>
  );
}
