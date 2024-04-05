import React from 'react';
import Header from "./components/Header";
import './LK.css';

export default function LK() {
  const userInfo = {
    initials: 'А',
    name: 'Александр',
    company: 'пао центр инвест',
    phone: '+79934482004'
  };

  const orders = [
    { id: 'N1121', date: '12.03.2024', status: 'Выполнена' },
  ];

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
              <div className="menu-item active">История перевозок</div>
              <div className="menu-item ">Ближайшие перевозки</div>
              <div className="menu-item">Настройки</div>
            </div>
          </aside>
          <main className="main-content">
            <div className="date-filter">
              <p>Период от</p><input type="date" />
              <p>До</p><input type="date" />
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
    </div></>
  );
}
