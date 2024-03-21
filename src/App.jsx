import Header from "./components/Header"
import DataSection from "./components/DataSection"
import UslugiSection from "./components/UslugiSection"
import TarifSection from "./components/TarifSection"
import GlavName from "./components/GlavName"

export default  function App(){
  return(
    <div>
      <Header />
    <main>
      <GlavName />

      <DataSection />
      <UslugiSection />  
      <TarifSection />

        </main>
      </div>
  )
}
