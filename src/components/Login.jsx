import "./Login.css";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Reg from "./Regist";
import axios from "axios";
import { api } from "../utils/api.js";

export default function Modal({ active, setActive }) {
    const [regActive, setRegActive] = useState(false);
    const [token, setToken] = useState(null);
    const [data, setData] = useState({ phone: '', password: '' });



    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setData({ ...data, [name]: value });
    };

    const handleLogin = () => {
        axios.get(`${api}/api/login`, {
            params: {
                phone_number: data.phone,
                password_hashed: data.password,
            },
        })
            .then(response => {
                const token = response.data.token;
                setToken(token);
                localStorage.setItem('token', token);

                // Verify the token
                return axios.get(`${api}/api/verify`, {
                    params: {
                        token: token
                    }
                });
            })
            .then(verifyResponse => {
                localStorage.setItem('user', JSON.stringify(verifyResponse.data.user));
                setActive(false);
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    };

    return (
        <div className={active ? "modal active" : "modal"} onClick={() => setActive(false)}>
            <div className="modal_content" onClick={e => e.stopPropagation()}>
                <div className="modal__content">
                    <h2>Личный кабинет</h2>
                    <h3>Авторизация</h3>
                    <input
                        className="one"
                        type="text"
                        name="phone"
                        placeholder="Номер телефона"
                        value={data.phone}
                        onChange={handleInputChange}
                    />
                    <br />
                    <input
                        className="two"
                        type="password"
                        placeholder="Пароль"
                        name="password"
                        value={data.password}
                        onChange={handleInputChange}
                    />
                    <br />
                    <button className="Aut" onClick={handleLogin}>Авторизация</button>
                    <button onClick={() => setRegActive(true)} className="Reg">Регистрация</button>
                    <Reg active={regActive} setActive={setRegActive} />
                </div>
            </div>
        </div>
    );
}
