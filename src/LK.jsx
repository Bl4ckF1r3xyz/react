import React, { useEffect, useState } from 'react';
import Header from "./components/Header";
import './LK.css';
import { Link } from "react-router-dom";
import bgimage from "./assets/image 1.png";
import { Parallax } from "react-parallax";
import Divider from "./components/Divider.jsx";
import axios from 'axios';

export default function LK() {
    const [userInfo, setUserInfo] = useState({});
    const [orders, setOrders] = useState([]);

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

    useEffect(() => {
        if (userInfo.id) {
            const fetchOrders = async () => {
                try {
                    const response = await axios.get(`https://culcat-diplom-3fe6.twc1.net/api/order?user_id=${userInfo.id}`);
                    setOrders(response.data);
                } catch (error) {
                    console.error("Failed to fetch orders:", error);
                }
            };
            fetchOrders();
        }
    }, [userInfo]);

    console.log(userInfo);

    return (
        <>
            <Header />
            <Parallax bgImage={bgimage} strength={500} bgImageStyle={{ height: '100%', maxWidth: '100vw' }}>
                <div className="lk-container">
                    <Divider />
                    <main className="main-content">
                        <div className="date-filter">
                            <p>Период от</p>
                            <input type="date" />
                            <p>До</p>
                            <input type="date" />
                        </div> {orders.map(order => (
                        <div  key={order.id} className="orders">

                                <div className="order-item" >
                                    <span className="order-id">Заказ {order.id}</span>
                                    <span className="order-date">{new Date(order.created_at).toLocaleDateString()}</span>
                                    <span className={`order-status ${order.status ? 'active' : 'inactive'}`}>{order.status ? 'Active' : 'Inactive'}</span>
                                    <span className="order-from">Откуда: {order.from}</span>
                                    <span className="order-to">Куда: {order.Where}</span>
                                    <span className="order-distance">Растояние: {order.distance} КМ</span>
                                    <span className="order-weight">Вес: {order.weight} КГ</span>
                                    <span className="order-price">Цена: ${order.endprice}</span>
                                </div>

                        </div>   ))}
                    </main>
                </div>
            </Parallax>
        </>
    );
}
