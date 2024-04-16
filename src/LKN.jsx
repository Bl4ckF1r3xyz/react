import React from 'react';
import Header from "./components/Header";
import './LK.css';
import { Link } from "react-router-dom";

export default function LKN() {
  const userInfo = {
    initials: 'А',
    name: 'Александр',
    company: 'пао центр инвест',
    phone: '+79934482004'
  };

  return (
    <><Header /><div className="lk-container-glav">

      <div className="lk-container">
        <div className="lk-content">
          <aside className="sidebar">
            <div className="user-profile">
              <div className="user-initials">{userInfo.initials}</div>
              <div className="user-details">
                <div className="user-name">{userInfo.name}</div>
                <div className="user-company">{userInfo.company}</div>
                <div className="user-phone">{userInfo.phone}</div>
              </div>
            </div>
            <div className="menu">
            <div className="menu-item"> <Link to="/LK">История перевозок</Link></div>
              <div className="menu-item "> <Link to="/LKDop">Ближайшие перевозки</Link></div>
              <div className="menu-item active">Настройки</div>
            </div>
          </aside>
          <main className="main-content">
            <h1>Идите нахуй бляди :/</h1>
          </main>
        </div>
      </div>
    </div></>
  );
}
