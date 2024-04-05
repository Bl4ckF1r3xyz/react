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

function MainPage(){
 const uslugi = [
  {usluga:'Перевозка'},
  {usluga:'Перевозка'},
  {usluga:'Перевозка'},
  {usluga:'Перевозка'},
 ];






    return(
        <>
           <div>
      <Header />
    <main>
      <GlavName />
      <DataSection />
      <UslugiSection /> 
      {uslugi.map((usluga, index) => (
  <div key={index} className="uslugi">
    <h3>{usluga.usluga}</h3>
  </div>
))}


      
       
      <h3 className="centered">Наши тарифы</h3>
      <p>Еврофуры</p><TarifSection /> 
      <p>Еврофуры</p><TarifSection /> 
      <p>Еврофуры</p><TarifSection /> 
      <p>Еврофуры</p><TarifSection /> 
      <p>Еврофуры</p><TarifSection /> 
      <p>Еврофуры</p><TarifSection /> 
      <p>Еврофуры</p><TarifSection /> 
        </main>
      </div>
        </>
    )
}

export default MainPage