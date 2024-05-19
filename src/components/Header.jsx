import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Modal from "./Calc";
import ModalKontact from "./ModalKontact";
import Login from "./Login";
import "./Header.css";

export default function Header() {
    const [modalActive, setModalActive] = useState(false);
    const [kontactActive, setKontactActive] = useState(false);
    const [loginActive, setLoginActive] = useState(false);
    const [menuActive, setMenuActive] = useState(false);
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    function handleLogout() {
        localStorage.removeItem('user');
        window.location.href = '/';
    }

    useEffect(() => {
        // Check if the user is in local storage
        const user = localStorage.getItem("user");
        if (user) {
            setIsAuthenticated(true);
        }
    }, []);

    return (
        <header>
            <div className="logo">
                <Link to="/">
                    <b>Харон</b><h5>транспортная фирма</h5>
                </Link>
            </div>


                <h2 onClick={() => setModalActive(true)}>Калькулятор</h2>
                <Link to="/Otziv">Отзывы</Link>
                <h2 onClick={() => setKontactActive(true)}>Связаться с нами</h2>
                {isAuthenticated ? (
                    <>
                    <Link to="/lk">Личный кабинет</Link>
                    <h2 onClick={handleLogout}>Выход</h2></>
                ) : (
                    <h2 onClick={() => setLoginActive(true)}>Авторизация</h2>
                )}

            <Modal active={modalActive} setActive={setModalActive} />
            <ModalKontact active={kontactActive} setActive={setKontactActive} />
            <Login active={loginActive} setActive={setLoginActive} />
        </header>
    );
}
