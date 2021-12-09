import './style.css'

export default function CoinInfo({name, imgUrl, currentPrice, marketCap}) {
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
        <button className="CoinInfo__more-information">ver mais</button>
    </li>
  )
}