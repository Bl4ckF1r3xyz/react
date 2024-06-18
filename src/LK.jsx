import React, { useEffect, useState } from 'react';
import Header from "./components/Header";
import './LK.css';
import { Link } from "react-router-dom";
import bgimage from "./assets/image 1.jpeg";
import {Parallax} from "react-parallax";
import Divider from "./components/Divider.jsx";
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
          <Parallax bgImage={bgimage} strength={500} bgImageStyle={{height: '100%', maxWidth: '100vw'}}>
              <div className="lk-container">
                  <Divider/>
                  <main className="main-content">
                      <div className="date-filter">
                          <p>Период от</p>
                          <input type="date"/>
                          <p>До</p>
                          <input type="date"/>
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
          </Parallax>
      </>
);
}
