import './style.css'
import { useEffect } from "react"
import { useParams } from "react-router-dom"
import { useState } from "react/cjs/react.development"
import Loading from "../../components/Loading"

export default function CoinPage() {
  const [information, setInformation] = useState({})
  const [isLoading, setIsLoading] = useState(true)

  const {id} = useParams()

  function formatPrice(price) {
    return Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL'
    }).format(price)
  }

  async function getSingleCoin() {
    const url = `https://api.coingecko.com/api/v3/coins/${id}`
    const response = await fetch(url)
    const responseData = await response.json()
    setInformation(responseData)
    setIsLoading(false)
  }

  console.log(information)

  useEffect(() => {
    getSingleCoin()
  }, [])
  return (
    <main className="CoinPage">

      {isLoading ? <Loading/> : ''}

      {!isLoading && (
        <div className="CoinPage__card">

        <figure className="CoinPage__figure">
          <img src={information.image.large} alt={`${information.name}`} className="CoinPage__coin-img"></img>
        </figure>
        <h1 className="CoinPage__card-title">{information.name}</h1>

        <p className="CoinPage__price">
          <strong>Valor atual:</strong> {formatPrice(information.market_data.current_price.brl)}
        </p>
        <p className="CoinPage__market-cap">
          <strong>Market cap:</strong> {formatPrice(information.market_data.market_cap.brl)}
        </p>
        <p className="CoinPage__percentage">
          <strong>Mudança de preço em porcentagem:</strong> <span className="CoinPage__percentage-change">{(information.market_data.price_change_percentage_1h_in_currency.brl).toFixed(2)}%</span>
        </p>
        <p className="CoinPage__rank">
          <strong>Coingecko Rank:</strong> <span className="CoinPage__rank-number">{information.coingecko_rank}</span>
        </p>
        <p dangerouslySetInnerHTML={{__html: information.description.en}}></p>
      </div>
      )}
      
    </main>
  )
}