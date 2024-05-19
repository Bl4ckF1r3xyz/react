import React from 'react';
import Header from "./components/Header";
import './LK.css';
import { Link } from "react-router-dom";
import Divider from "./components/Divider.jsx";
import bgimage from "./assets/image 1.png";
import {Parallax} from "react-parallax";

export default function LKN() {


  return (
      <><Header />    <Parallax bgImage={bgimage} strength={500} bgImageStyle={{height: '100%', maxWidth: '100vw'}}>
        <div className="lk-container">
        <Divider/>

          <div className="card">
                <img src="your-image-url.jpg" alt="" className="image" />
                <div className="details">
                    <table>
                        <tbody>
                            <tr>
                                <td>Фио</td>
                                <td>Ебло Утиное</td>
                            </tr>
                            <tr>
                                <td>Email</td>
                                <td>Chandon@eblan.com</td>
                            </tr>
                            <tr>
                                <td>Номер телефона</td>
                                <td>79524332122</td>
                            </tr>
                            <tr>
                                <td>Представитель компании</td>
                                <td>Anti debics debix club</td>
                            </tr>
                            <tr>
                                <td>Пароль</td>
                                <td>*****</td>
                            </tr>
                        </tbody>
                    </table>
                    <button className="order-button">Изменить</button>
                </div>
            </div>
          <main className="main-content">
          </main>

    </div></Parallax></>
  );
}
