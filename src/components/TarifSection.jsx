import React, { useState } from "react";
import Button from "./Button/Button";
import Modal from "./Modal";

export default function Section() {
  const [modalActive, setModalActive] = useState(false);

  return (
    <section className="centered">
      <Button onClick={() => setModalActive(true)}>Быстрый расчет</Button>
      <Button>Подробный расчет</Button>
      <Modal active={modalActive} setActive={setModalActive} />
    </section>
  );
}
