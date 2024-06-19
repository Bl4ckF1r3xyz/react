import React from 'react';
import Header from "./components/Header";
import './LK.css';
import { Link } from "react-router-dom";
import Divider from "./components/Divider.jsx";


export default function LKN() {


  return (
      <><Header />    
        <div className="lk-container">
        <Divider/>

          <div className="card">
                <img src="your-image-url.jpg" alt="" className="image" />
                <div className="details">
                    <table>
                        <tbody>
                            <tr>
                                <td>Фио</td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>Email</td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>Номер телефона</td>
                                <td>79524332122</td>
                            </tr>
                            <tr>
                                <td>Представитель компании</td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>Пароль</td>
                                <td>*****</td>
                            </tr>
                        </tbody>
                    </table>
                    <button>Изменить</button>
                </div>
            </div>
          <main className="main-content">
          </main>

    </div></>
  );
}
