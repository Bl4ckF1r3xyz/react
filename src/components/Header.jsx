import { Link } from "react-router-dom"

export default function Header(){
    return(
      <header>
        <Link to="/mainPage">Харон</Link>
        <h3>транспортная фирма</h3>
        <h2>Калькулятор</h2>
        <Link to="/Otziv">Отзыв</Link>
        <h2>Связаться с нами</h2>
        <Link to="/lk">Личный кабинет</Link>
      </header>
    )
  }
  