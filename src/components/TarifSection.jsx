import React, { useState } from "react";
import Modal from "./Modal";
import "./Button.css"

export default function Section() {
  const [modalActive, setModalActive] = useState(false);

  return (
      <section className="centred" >
      <button onClick={() => setModalActive(true)}>Быстрый расчет</button>
      <button>Подробный расчет</button>
      <Modal active={modalActive} setActive={setModalActive} />
    </section>
  );
}
