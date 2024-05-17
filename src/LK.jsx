import React, { useEffect, useState } from 'react';
import Header from "./components/Header";
import './LK.css';
import { Link } from "react-router-dom";

export default function LK() {
  const [userInfo, setUserInfo] = useState({});

  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      try {
        setUserInfo(JSON.parse(storedUser));
      } catch (e) {
        console.error("Failed to parse user info from localStorage:", e);
      }
    }
  }, []);

  console.log(userInfo);

  const orders = [
    { id: 'N1121', date: '12.03.2024', status: 'Выполнена' },
  ];

  return (
      <>
        <Header />
        <div className="lk-container-glav">
          <div className="lk-container">
            <div className="lk-content">
              <aside className="sidebar">
                <div className="user-profile">
                  <div className="user-initials">
                    {userInfo.firstname && userInfo.lastname ? `${userInfo.firstname[0]}${userInfo.lastname[0]}` : 'N/A'}
                  </div>
                  <div className="user-details">
                    <div className="user-name">
                      {userInfo.firstname ? userInfo.firstname : 'Имя'} {userInfo.lastname ? userInfo.lastname : 'Фамилия'}
                    </div>
                    <div className="user-company">
                      {userInfo.company ? userInfo.company : 'Компания'}
                    </div>
                    <div className="user-phone">
                      {userInfo.phone_number ? userInfo.phone_number : 'Телефон'}
                    </div>
                  </div>
                </div>
                <div className="menu">
                  <div className="menu-item active">История перевозок</div>
                  <div className="menu-item">
                    <Link to="/LKDop">Ближайшие перевозки</Link>
                  </div>
                  <div className="menu-item">
                    <Link to="/LKN">Настройки</Link>
                  </div>
                </div>
              </aside>
              <main className="main-content">
                <div className="date-filter">
                  <p>Период от</p>
                  <input type="date" />
                  <p>До</p>
                  <input type="date" />
                </div>
                <div className="orders">
                  {orders.map(order => (
                      <div className="order-item" key={order.id}>
                        <span className="order-id">Заказ {order.id}</span>
                        <span className="order-date">{order.date}</span>
                        <span className={`order-status ${order.status.toLowerCase()}`}>{order.status}</span>
                      </div>
                  ))}
                </div>
              </main>
            </div>
          </div>
        </div>
      </>
  );
}
