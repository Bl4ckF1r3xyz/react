import Header from "./Header"
import DataSection from './DataSection'
import TarifSection from './TarifSection'
import {useEffect, useState} from "react"
import Modal from "./Calc"
import ModalKontact from "./ModalKontact"
import axios from "axios";
import "./Calc.css"
import "./mainPage.css"
import {api} from "../utils/api.js";
import {Parallax} from "react-parallax";
import bgimage from '../assets/image 1.png'

function MainPage(){
  const [tariff, setTariff] = useState([]);
  const [loading, setLoading] = useState(true); // Add loading state
  const services = [
    { id: 1, img: '15.png', text: 'Перевозки отдельной машиной' },
    { id: 2, img: '14.png', text: 'Перевозки сборных грузов' },
    { id: 3, img: '13.png', text: 'Перевозки негабаритных грузов' },
    { id: 4, img: '12.png', text: 'Перевозки опасных грузов' },
    { id: 5, img: '11.png', text: 'Перевозки в труднодоступные места' },
  ];
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
               <Parallax bgImage={bgimage} strength={500} blur={100} bgImageStyle={{ height: '100%', maxWidth: '100vw' }} >
    <main>
    <div className="background" />
    <h1 className="er">Грузоперевозки <b>по России</b> от 100кг или 1 М3</h1>
      <DataSection />
      <h1 className="centered">Наши <b>услуги</b></h1>
          <h4 className="centered">
          Автомобильные грузоперевозки по всей России в том числе и в труднодоступные районы
          </h4>
      <div className="services">
          {services.map(service => (
            <div key={service.id} className="service">
              <img src={service.img}/>
              <span className="service-text">{service.text}</span>
            </div>
          ))}
        </div>


      
       
      <h1 className="centered">Наши<b> тарифы </b></h1>
      <div className="services">
      {tariff.map(tariff => (

<div key={tariff.id}  className="service">
      <img src={`data:image/png;base64,${tariff.icon}`}/>
      <p className="service-text">{tariff.name}</p><TarifSection maxWeight={tariff.max_weight} />
</div>
        ))}
</div>
        </main>
               </Parallax>
      </div>
        </>
    )
}

export default MainPage