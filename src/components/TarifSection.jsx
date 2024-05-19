import React, { useState } from "react";
import Modal from "./Calc";
import "./Button.css"
import "./Card"
import { Link } from "react-router-dom";

export default function Section(maxWeight) {
  const [modalActive, setModalActive] = useState(false);
  const services = [
    { id: 1, img: '15.png', text: 'Перевозки отдельной машиной' },
    { id: 2, img: '14.png', text: 'Перевозки сборных грузов' },
    { id: 3, img: '13.png', text: 'Перевозки негабаритных грузов' },
    { id: 4, img: '12.png', text: 'Перевозки опасных грузов' },
    { id: 5, img: '11.png', text: 'Перевозки в труднодоступные места' },
  ];

  return (
      <section className="centred" >
      <button  onClick={() => setModalActive(true)}>Быстрый расчет</button>
      <br />
      <Link to="/Card"><button >Подробный расчет</button></Link>
      <Modal active={modalActive} maxWeight={maxWeight.maxWeight}  setActive={setModalActive} />

    </section>
    
  );
}
