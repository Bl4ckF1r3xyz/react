import React from "react"
import "./Regist.css"
import "./Card_pop.css";
export default function Modal({ active, setActive,maxWeight }) {
  return (
    <div className={active ? "modal active" : "modal"} onClick={() => setActive(false)}>
      <div className="modal_content" onClick={e => e.stopPropagation()}>
        <div className="modal__content2">
        <h2>Оформление заказа</h2>
        <input className="one" type="text" placeholder="Фио" />
        <br />
        <input className="one" type="text" placeholder="Номер телефона" />
        <br />
        <input className="one" type="text" placeholder="Email" />
        <br />
        <input className="one" type="text" placeholder="Откуда" />
        <br />
        <input className="one" type="text" placeholder="Куда" />
        <br />
        <input type="radio" id="contactChoice1" name="contact" value="email" />
        <label for="contactChoice1">Отдельной машиной</label>
        <br />
        <input type="radio" id="contactChoice1" name="contact" value="email" />
        <label for="contactChoice1">Негабаритный</label>
        <br />
        <input type="radio" id="contactChoice1" name="contact" value="email" />
        <label for="contactChoice1">Опасный</label>
        <br />
            <input type="checkbox" value="email" />
        <label for="contactChoice1">Нужны грузчики на погрузку</label>
        <br />
            <input type="checkbox" value="email" />
        <label for="contactChoice1">Нужны грузчики на разгрузку</label>
        <br />
            <input type="checkbox" value="email" />
        <label for="contactChoice1">Нужна спец. техника</label>
        <br />
        <input className="one" type="text" placeholder="Вес груза:" />
        <br />
        <input className="one" type="text" placeholder="Ваш грузовик:" />
        <br />
                <button className="Auto2">Зарегистрироваться</button>
        </div>
      </div>
    </div>
  );
}
