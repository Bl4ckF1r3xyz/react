import Header from "./components/Header"
import DataSection from "./components/DataSection"
import UslugiSection from "./components/UslugiSection"
import TarifSection from "./components/TarifSection"
import GlavName from "./components/GlavName"
import LK from "./LK"
import { Routes, Route, Link } from 'react-router-dom';

export default  function App(){
  return(
    <div>
      <Header />
    <main>
      <GlavName />
      <DataSection />
      <UslugiSection />  
      <TarifSection />
      <Routes>
      <Route path="./LK" element={<LK />}></Route>
      </Routes>

        </main>
      </div>
  )
}
