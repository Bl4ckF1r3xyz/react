import React, { useState } from "react";
import "./Regist.css";
import {api} from "../utils/api.js";

export default function Modal({ active, setActive }) {
  const [formData, setFormData] = useState({
    phone_number: "",
    password: "",
    confirmPassword: "",
    email: "",
    firstname: "",
    lastname: "",
    thirdname: "",
    company: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    const dataToSend = { ...formData };
    delete dataToSend.confirmPassword;

    try {
      const response = await fetch(api+"/api/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(dataToSend)
      });

      if (response.ok) {
        alert("Registration successful!");
        setActive(false);
      } else {
        alert("Registration failed. Please try again.");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("An error occurred. Please try again.");
    }
  };

  return (
      <div className={active ? "modal active" : "modal"} onClick={() => setActive(false)}>
        <div className="modal_content" onClick={(e) => e.stopPropagation()}>
          <div className="modal__content">
            <h2>Личный кабинет</h2>
            <h3>Регистрация</h3>
            <form onSubmit={handleSubmit}>
              <input
                  className="one"
                  type="text"
                  name="firstname"
                  placeholder="Имя"
                  value={formData.firstname}
                  onChange={handleChange}
              />
              <br />
              <input
                  className="one"
                  type="text"
                  name="lastname"
                  placeholder="Фамилия"
                  value={formData.lastname}
                  onChange={handleChange}
              />
              <br />
              <input
                  className="one"
                  type="text"
                  name="thirdname"
                  placeholder="Отчество"
                  value={formData.thirdname}
                  onChange={handleChange}
              />
              <br />
              <input
                  className="one"
                  type="text"
                  name="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={handleChange}
              />
              <br />
              <input
                  className="one"
                  type="text"
                  name="phone_number"
                  placeholder="Номер телефона"
                  value={formData.phone_number}
                  onChange={handleChange}
              />
              <br />
              <input
                  className="one"
                  type="text"
                  name="company"
                  placeholder="Представителем какой компании вы являетесь"
                  value={formData.company}
                  onChange={handleChange}
              />
              <br />
              <input
                  className="one"
                  type="password"
                  name="password"
                  placeholder="Пароль"
                  value={formData.password}
                  onChange={handleChange}
              />
              <br />
              <input
                  className="one"
                  type="password"
                  name="confirmPassword"
                  placeholder="Пароль еще раз"
                  value={formData.confirmPassword}
                  onChange={handleChange}
              />
              <br />
              <input type="checkbox" value="email" />
              <a target="_blank" className="icq" href="src/assets/Политика.pdf">
                Ставя галочку, вы подтверждаете, что ознакомились с условиями обработки персональных данных и принимаете их.
              </a>
              <br />
              <button className="Auto" type="submit">Зарегистрироваться</button>
            </form>
          </div>
        </div>
      </div>
  );
}
