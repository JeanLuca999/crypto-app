import {Link} from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

import './style.css'

export default function CoinInfo({name, imgUrl, currentPrice, marketCap, id}) {
  let navigate = useNavigate()
  return (
    <li className="CoinInfo">
      <div className="CoinInfo__container">
        <h2 className="CoinInfo__name">{name}</h2>
        <figure className="CoinInfo__figure">
          <img src={imgUrl} className="CoinInfo__img" alt={`${name} coin`}></img>
        </figure>
      </div>
      <div className="CoinInfo__container">
        <p className="CoinInfo__current-price">Valor atual: {currentPrice}</p>
        <p className="CoinInfo__market-cap">Market Cap: {marketCap}</p>
      </div>
        <button className="CoinInfo__more-information" onClick={()=>navigate(`/coins/${id}`)}>ver mais</button>
    </li>
  )
}