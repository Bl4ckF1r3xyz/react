import Header from "./Header"
import GlavName from './GlavName'
import DataSection from './DataSection'
import UslugiSection from './UslugiSection'
import TarifSection from './TarifSection'


function MainPage(){
    return(
        <>
           <div>
      <Header />
    <main>
      <GlavName />
      <DataSection />
      <UslugiSection />  
      <TarifSection />
      

        </main>
      </div>
        </>
    )
}

export default MainPage