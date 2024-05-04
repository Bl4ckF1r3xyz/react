import Header from "./Header"
import "./Card.css"


function MainPage(){

    return(  
        <>
           <div>
      <Header />
    <main>
    <input className="one" type="text" placeholder="Откуда?" />
        <br />
        <input className="two" type="text" placeholder="Куда?" />
        <br />
        <input className="three" type="text" placeholder="Укажите примерный вес груза (в кг):" />
        <br />
        <p>Выберите тип груза:</p>
        <br />
        <input type="radio" id="contactChoice1" name="contact" value="email" />
        <label for="contactChoice1">Отдельной машиной</label>
        <br />
        <input type="radio" id="contactChoice1" name="contact" value="email" />
        <label for="contactChoice1">Негабаритный</label>
        <br />
        <input type="radio" id="contactChoice1" name="contact" value="email" />
        <label for="contactChoice1">Опасный</label>
        <br />
            <input type="checkbox" value="email" />
        <label for="contactChoice1">Нужны грузчики на погрузку</label>
        <br />
            <input type="checkbox" value="email" />
        <label for="contactChoice1">Нужны грузчики на разгрузку</label>
        <br />
            <input type="checkbox" value="email" />
        <label for="contactChoice1">Нужна спец. техника</label>
        <br />
                <button className="Ras">Рассчитать</button>
        </main>
      </div>
        </>
    )
}

export default MainPage