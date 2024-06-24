import React, { useEffect, useState } from 'react';
import Header from "./Header.jsx";
import "../LK.css";
import { Link } from "react-router-dom";
import Divider from "./Divider.jsx";
import axios from 'axios';
import "./Admin.css"
import AdminTarif from "./AdminTarif.jsx"


const TrucksAdminPanel = () => {
  const [trucks, setTrucks] = useState([]);

  useEffect(() => {
    // Здесь можно загрузить список грузовиков из API
  }, []);

  const handleAddTruck = () => {
    // Логика добавления нового грузовика
  };

  const handleDeleteTruck = (truckId) => {
    // Логика удаления грузовика по ID
  };

  return (
    <div>
        <Header />
    <div className="container">
    <h2>Управление услугами</h2>
    <button onClick={handleAddTruck}>Добавить грузовик</button>
    <ul>
      {trucks.map(truck => (
        <li key={truck.id}>
          {truck.name} <button onClick={() => handleDeleteTruck(truck.id)}>Удалить</button>
        </li>
      ))}
    </ul>
    <div  className="lk-content1">
        <aside className="sidebar1">
        <Divider />
        <div className="menu">
    <div className="menu-item "><Link to="/Admin">Управление грузовиками</Link></div>
    <div className="menu-item">
    <Link to="/AdminUslug">Управление услугами</Link>
    </div>
    <div className="menu-item">
    <Link to="/AdminTarif">Управление тарифами</Link>
    </div>
    </div>
    </aside>
  </div>
  </div>
</div>
);
};

export default TrucksAdminPanel;
