import Header from "./components/Header"
import DataSection from "./components/DataSection"
import TarifSection from "./components/TarifSection"
import LK from "./LK"
import Otziv from "./components/Otziv"
import MainPage from "./components/MainPage"
import { Route,Routes } from "react-router-dom"
import LKDop from "./LKDop"
import LKN from "./LKN"
import Card from "./components/Card"



export default  function App(){
  return(
 <Routes>
      <Route path="/" element={<MainPage/>}></Route>
      <Route path="/lk" element={<LK />}></Route>
      <Route path="/otziv" element={<Otziv />}></Route>
      <Route path="/main" element={<MainPage />}></Route>
      <Route path="/LKDop" element={<LKDop />}></Route>
      <Route path="/LKN" element={<LKN />}></Route>
      <Route path="/Card" element={<Card />}></Route>
      </Routes>
  )
}
