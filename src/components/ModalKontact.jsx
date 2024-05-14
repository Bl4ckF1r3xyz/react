import React, { useState } from "react";
import axios from "axios";
import "./ModalKontact.css";
import {api} from "../utils/api.js";

export default function ModalKontact({ active, setActive }) {
  const [formData, setFormData] = useState({
    name: "",
    phone_number: "",
    email: "",
    goal: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async () => {
    try {
      const response = await axios.post(
          api+"/api/Contact",
          formData
      );
      if (response.status === 200) {
        // Handle success, maybe show a success message
        console.log("Message sent successfully");
        setActive(false);
      } else {
        // Handle error, maybe show an error message
        console.error("Failed to send message");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
      <div className={active ? "modal active" : "modal"} onClick={() => setActive(false)}>
        <div className="modal_content" onClick={(e) => e.stopPropagation()}>
          <div className="modal__content">
            <h2>Здесь вы можете связаться с нами.</h2>
            <input
                className="one"
                type="text"
                placeholder="Фио?"
                name="name"
                value={formData.name}
                onChange={handleChange}
            />
            <input
                className="two"
                type="text"
                placeholder="Номер?"
                name="phone_number"
                value={formData.phone_number}
                onChange={handleChange}
            />
            <input
                className="three"
                type="text"
                placeholder="E-mail"
                name="email"
                value={formData.email}
                onChange={handleChange}
            />
            <textarea
                className="four"
                contentEditable="true"
                type="text"
                placeholder="Цель обращения"
                name="goal"
                value={formData.goal}
                onChange={handleChange}
            />

            <button className="Otp" onClick={handleSubmit}>
              Отправить
            </button>
          </div>
        </div>
      </div>
  );
}
