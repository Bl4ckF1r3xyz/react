import React, { useState } from "react";
import Modal from "./Calc";
import "./Button.css"
import "./Card"
import { Link } from "react-router-dom";

export default function Section() {
  const [modalActive, setModalActive] = useState(false);

  return (
      <section className="centred" >
      <button onClick={() => setModalActive(true)}>Быстрый расчет</button>
      <Link to="/Card"><button >Подробный расчет</button></Link>
      <Modal active={modalActive} setActive={setModalActive} />
    </section>
  );
}
