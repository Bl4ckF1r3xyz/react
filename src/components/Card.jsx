import React, { useState } from 'react';
import Header from "./Header";
import "./Card.css";
import { api } from "../utils/api.js";

function MainPage() {
    const [selectedType, setSelectedType] = useState('');
    const [responseData, setResponseData] = useState(null);
    const userInfo = JSON.parse(localStorage.getItem('user'));
    const handleCalculate = () => {
        fetch(`${api}/api/trucks?type=${selectedType}`)
            .then(response => response.json())
            .then(data => {
                setResponseData(data);
                console.log(data);
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    };

    const handleRadioChange = (e) => {
        setSelectedType(e.target.value);
    };

    const handleOrder = (truckId) => {
        const orderData = {
            truk_id: Number(truckId),
            user_id: Number(userInfo.id),
            type_id: Number(selectedType),
            from: document.querySelector('.zero').value,
            where: document.querySelector('.zero-two').value,
            weight: Number(document.querySelector('.zero-three').value),
            status: true,
            created_at: new Date().toISOString(),
        };

        fetch(`${api}/api/order`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(orderData),
        })
            .then(response => response.json())
            .then(data => {
                console.log('Order placed:', data);
                // Можно добавить логику обработки успешного заказа здесь, например, обновление состояния или отображение сообщения
            })
            .catch(error => {
                console.error('Error placing order:', error);
            });
    };

    return (
        <>
            <div>
                <Header />
                <main>
                    <div id="content">
                        <input className="zero" type="text" placeholder="Откуда?"/>
                        <br/>
                        <input className="zero-two" type="text" placeholder="Куда?"/>
                        <br/>
                        <input className="zero-three" type="text" placeholder="Укажите примерный вес груза (в кг):"/>
                        <br/>
                        <p>Выберите тип груза:</p>
                        <br/>
                        <input type="radio" id="contactChoice1" name="contact" value="1" onChange={handleRadioChange}/>
                        <label htmlFor="contactChoice1">Отдельной машиной</label>
                        <br/>
                        <input type="radio" id="contactChoice2" name="contact" value="2" onChange={handleRadioChange}/>
                        <label htmlFor="contactChoice2">Негабаритный</label>
                        <br/>
                        <input type="radio" id="contactChoice3" name="contact" value="3" onChange={handleRadioChange}/>
                        <label htmlFor="contactChoice3">Опасный</label>
                        <br/>
                        <button className="Ras" onClick={handleCalculate}>Рассчитать</button>
                    </div>
                    <div className="truck-info-container">
                        <h1>Вот такие грузовики мы вам подобрали</h1>
                        {responseData && responseData.trucks && responseData.trucks.map((truck) => (
                            <div className="truck-card" key={truck.id}>
                                <img src={truck.img} alt="Грузовик" className="truck-image" />
                                <div className="truck-details">
                                    <table>
                                        <tbody>
                                        <tr>
                                            <td>Грузоподъемность</td>
                                            <td>{truck.load_capacity} {truck.id}</td>
                                        </tr>
                                        <tr>
                                            <td>Длина кузова</td>
                                            <td>{truck.length} м.</td>
                                        </tr>
                                        <tr>
                                            <td>Высота кузова</td>
                                            <td>{truck.height} м.</td>
                                        </tr>
                                        <tr>
                                            <td>Объём кузова</td>
                                            <td>{truck.volume} м/куб</td>
                                        </tr>
                                        <tr>
                                            <td>Вид кузова</td>
                                            <td>фура</td>
                                        </tr>
                                        <tr>
                                            <td>Марка грузовика</td>
                                            <td>{truck.Brand}</td>
                                        </tr>
                                        <tr>
                                            <td>Опыт работы</td>
                                            <td>{truck.experience} год</td>
                                        </tr>
                                        </tbody>
                                    </table>
                                    <button className="order-button" onClick={() => handleOrder(truck.id)}>Заказать</button>
                                </div>
                            </div>
                        ))}
                    </div>
                </main>
            </div>
        </>
    )
}

export default MainPage;
