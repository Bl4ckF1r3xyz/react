import Header from "./Header"
import GlavName from './GlavName'
import DataSection from './DataSection'
import UslugiSection from './UslugiSection'
import TarifSection from './TarifSection'
import {useEffect, useState} from "react"
import Modal from "./Calc"
import ModalKontact from "./ModalKontact"
import axios from "axios";
import "./Calc.css"
import "./mainPage.css"
import {api} from "../utils/api.js";

function MainPage(){
  const [tariff, setTariff] = useState([]);
  const [loading, setLoading] = useState(true); // Add loading state

  useEffect(() => {
    axios.get(api+'/api/tariff',  )
        .then(response => {
          setTariff(response.data.tariff);
          setLoading(false);

        })
        .catch(error => {
          console.error('Error fetching data:', error);
        });
  }, []);
    return(  
        <>
           <div>
      <Header />
    <main>
    <div className="background" />
      <GlavName />
      <DataSection />
      <UslugiSection />
      <img className="oz" src="15.png" />
      <p>Перевозки отдельной машиной</p>
      <img className="ob" src="14.png"/>
      <p>Перевозки сборных грузов</p> 
      <img className="ob"src="13.png"/> 
      <p>Перевозки негабаритных грузов</p>
      <img src="11.png"/> 
      <p>Перевозки опасных грузов</p>
      <img src="12.png"/>
      <p>Перевозки в труднодоступные места</p>



      
       
      <h3 className="centered">Наши тарифы</h3>
      {tariff.map(tariff => (

<div key={tariff.id}>
      <img width='100px' height='100px' src={`data:image/png;base64,${tariff.icon}`}/>
      <p>{tariff.name}</p><TarifSection maxWeight={tariff.max_weight} />
</div>
        ))}
        </main>
      </div>
        </>
    )
}

export default MainPage