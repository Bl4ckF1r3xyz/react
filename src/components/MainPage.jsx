import Header from "./Header";
import DataSection from './DataSection';
import TarifSection from './TarifSection';
import {useEffect, useState} from "react";
import Modal from "./Calc";
import ModalKontact from "./ModalKontact";
import axios from "axios";
import "./Calc.css";
import "./mainPage.css";
import {api} from "../utils/api.js";
import {Parallax} from "react-parallax";
import bgimage from '../assets/image 1.jpeg';

function MainPage() {
    const [tariff, setTariff] = useState([]);
    const [services, setServices] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        axios.get(api + '/api/services')
            .then(response => {
                setServices(response.data.services);
                console.log(services)
                setLoading(false);
            })
            .catch(error => {
                console.error('Error fetching services data:', error);
                setLoading(false);
            });
    }, []);

    useEffect(() => {
        axios.get(api + '/api/tariff')
            .then(response => {
                setTariff(response.data.tariff);
                setLoading(false);
            })
            .catch(error => {
                console.error('Error fetching tariff data:', error);
                setLoading(false);
            });
    }, []);

    if (loading) {
        return <div>Loading...</div>;
    }

    return (
        <>
            <div>
                <Header />
                <Parallax bgImage={bgimage} strength={500} blur={0} bgImageStyle={{ height: '100%', maxWidth: '100vw' }}>
                    <main>
                        <div className="background" />
                        <h1 className="er">Грузоперевозки <b>по России</b> от 100кг или 1 М3</h1>
                        <DataSection />
                        <h1 className="centered">Наши <b>услуги</b></h1>
                        <h4 className="centered">
                            Автомобильные грузоперевозки по всей России в том числе и в труднодоступные районы
                        </h4>
                        <div className="services">
                            {services && services.map(service => (
                                <div key={service.id} className="service">
                                    <img src={service.img} alt={service.name} />
                                    <span className="service-text">{service.name}</span>
                                </div>
                            ))}
                        </div>
                        <h1 className="centered">Наши<b> тарифы </b></h1>
                        <div className="services">
                            {tariff && tariff.map(tariff => (
                                <div key={tariff.id} className="service">
                                    <img src={`data:image/png;base64,${tariff.icon}`} alt={tariff.name} />
                                    <p className="service-text">{tariff.name}</p>
                                    <TarifSection maxWeight={tariff.max_weight} />
                                </div>
                            ))}
                        </div>
                    </main>
                </Parallax>
            </div>
        </>
    );
}

export default MainPage;
