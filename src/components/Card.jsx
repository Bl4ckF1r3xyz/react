import Header from "./Header"
import "./Card.css"
import React from 'react';



function MainPage(){

    return(  
        <>
           <div>
      <Header />
    <main>
    <div id="content">
    <input className="zero" type="text" placeholder="Откуда?" />
        <br />
        <input className="zero-two" type="text" placeholder="Куда?" />
        <br />
        <input className="zero-three" type="text" placeholder="Укажите примерный вес груза (в кг):" />
        <br />
        <p>Выберите тип груза:</p>
        <br />
        <input type="radio" id="contactChoice1" name="contact" value="email" />
        <label for="contactChoice1">Отдельной машиной</label>
        <br />
        <input type="radio" id="contactChoice1" name="contact" value="email" />
        <label for="contactChoice1">Негабаритный</label>
        <br />
        <input type="radio" id="contactChoice1" name="contact" value="email" />
        <label for="contactChoice1">Опасный</label>
        <br />
            <input type="checkbox" value="email" />
        <label for="contactChoice1">Нужны грузчики на погрузку</label>
        <br />
            <input type="checkbox" value="email" />
        <label for="contactChoice1">Нужны грузчики на разгрузку</label>
        <br />
            <input type="checkbox" value="email" />
        <label for="contactChoice1">Нужна спец. техника</label>
        <br />
                <button className="Ras">Рассчитать</button> 
        
        <div className="truck-info-container">
            <h1>Вот такие грузовики мы вам подобрали</h1>
            <div className="truck-card">
                <img src="your-image-url.jpg" alt="Грузовик" className="truck-image" />
                <div className="truck-details">
                    <table>
                        <tbody>
                            <tr>
                                <td>Грузоподъемность</td>
                                <td>20 т.</td>
                            </tr>
                            <tr>
                                <td>Длина кузова</td>
                                <td>13.6 м.</td>
                            </tr>
                            <tr>
                                <td>Высота кузова</td>
                                <td>2.65 м.</td>
                            </tr>
                            <tr>
                                <td>Объём кузова</td>
                                <td>82 м/куб</td>
                            </tr>
                            <tr>
                                <td>Вид кузова</td>
                                <td>фура</td>
                            </tr>
                            <tr>
                                <td>Марка грузовика</td>
                                <td>DONGFENG</td>
                            </tr>
                            <tr>
                                <td>Опыт работы</td>
                                <td>1 год</td>
                            </tr>
                        </tbody>
                    </table>
                    <button className="order-button">Заказать</button>
                </div>
            </div>
        </div>

        </div>     
        </main>
      </div>
        </>
    )
}

export default MainPage