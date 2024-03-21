import { info } from "../data"
import Info from "./Info"

export default function Section () {
return (
<section>
      <ul>
      {info.map(info =>
      <Info key={info.description} {...info}/>)}
      </ul>
      </section>
)
}