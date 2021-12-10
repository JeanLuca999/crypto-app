import './style.css'
import { useEffect } from "react"
import { useParams } from "react-router-dom"
import { useState } from "react/cjs/react.development"
import Loading from "../../components/Loading"

export default function CoinPage() {
  const [information, setInformation] = useState({})
  const [isLoading, setIsLoading] = useState(true)

  const {id} = useParams()

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

        <p className="CoinPage__price">{information.price}</p>
        <p className="CoinPage__market-cap">{information.market_cap}</p>
        <p className="CoinPage__percentage"><span className="CoinPage__percentage-change"></span></p>
        <p className="CoinPage__rank"><span className="CoinPage__rank-number"></span></p>
      </div>
      )}
      
    </main>
  )
}