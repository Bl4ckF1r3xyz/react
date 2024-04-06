import Header from "./components/Header"
import DataSection from "./components/DataSection"
import UslugiSection from "./components/UslugiSection"
import TarifSection from "./components/TarifSection"
import GlavName from "./components/GlavName"
import LK from "./LK"
import Otziv from "./components/Otziv"
import MainPage from "./components/MainPage"
import { Route,Routes } from "react-router-dom"
import LKDop from "./LKDop"



export default  function App(){
  return(
 <Routes>
      <Route path="/" element={<MainPage/>}></Route>
      <Route path="/lk" element={<LK />}></Route>
      <Route path="/otziv" element={<Otziv />}></Route>
      <Route path="/main" element={<MainPage />}></Route>
      <Route path="/LKDop" element={<LKDop />}></Route>
      </Routes>
  )
}
