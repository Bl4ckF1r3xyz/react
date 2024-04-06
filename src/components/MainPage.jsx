import Header from "./Header"
import GlavName from './GlavName'
import DataSection from './DataSection'
import UslugiSection from './UslugiSection'
import TarifSection from './TarifSection'
import { useState } from "react"
import Modal from "./Modal"
import ModalKontact from "./ModalKontact"
import "./Modal.css"
import "./ModalKontact.css"
import "./mainPage.css"

function MainPage(){

    return(  
        <>
           <div>
      <Header />
    <main>
    <div className="background" />
      <GlavName />
      <DataSection />
      <UslugiSection />
      <img src="15.png" />
      <p>Перевозки отдельной машиной</p>
      <img src="14.png"/>
      <p>Перевозки сборных грузов</p> 
      <img src="13.png"/> 
      <p>Перевозки негабаритных грузов</p>
      <img src="11.png"/> 
      <p>Перевозки опасных грузов</p>
      <img src="12.png"/>
      <p>Перевозки в труднодоступные места</p>



      
       
      <h3 className="centered">Наши тарифы</h3>
      
      <img src="1.png"/>
      <p>ЕВРОФУРЫ 20 ТОНН От 30 руб/км</p><TarifSection />
      <img src="2.png"/> 
      <p>ДЛЯ ОПАСНЫХ ГРУЗОВ 20 ТОНН От 40 руб/км</p><TarifSection />
      <img src="3.png"/> 
      <p>ДЛЯ ОПАСНЫХ НЕГАБАРИТНЫХ ГРУЗОВ 20 ТОНН От 65 руб/км</p><TarifSection />
      <img src="4.png"/> 
      <p>ГАЗЕЛИ 2 ТОННЫ От 9 руб/км</p><TarifSection /> 
      <img src="5.png"/>
      <p>ПЯТИТОННИКИ 5 ТОНН От 16 руб/км</p><TarifSection /> 
      <img src="6.png"/>
      <p>ДЕСЯТИТОННИКИ 10 ТОНН От 27 руб/км</p><TarifSection /> 
      <img src="7.png"/>
      <p>ПЯТИТОННИКИ 5 ТОНН От 16 руб/км</p><TarifSection /> 
        </main>
      </div>
        </>
    )
}

export default MainPage