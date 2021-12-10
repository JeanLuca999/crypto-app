import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import ChangePage from '../../components/ChangePage'
import CoinInfo from '../../components/CoinInfo'
import Loading from '../../components/Loading'
import './style.css'

export default function Home() {
  const [coinsList, setCoinsList] = useState([])
  const [allCoins, setAllCoins] = useState([])
  const [inputText, setInputText] = useState('')
  const {page} = useParams()
  const [isLoading, setIsLoading] = useState(true)

  async function getCoinsList() {
    const url = `https://api.coingecko.com/api/v3/coins/markets?vs_currency=brl&order=market_cap_desc&per_page=25&page=${page || 1}&sparkline=false`
    const response = await fetch(url)
    const responseData = await response.json()

    setCoinsList(responseData)
    setAllCoins(responseData)
    setIsLoading(false)
  }

  function filterCoinsList(text) {
    const filteredArray = allCoins.filter(e => e.name.toLowerCase().includes(text.toLowerCase()))
    setCoinsList(filteredArray)
  }

  useEffect(() => {
    getCoinsList()
  },[page])

  return (
    <main className="home">
      <h1 className="home__title">Crypto App</h1>
      <div className="home__search-container">
        <input
          value={inputText}
          type="text"
          placeholder="Bitcoin"
          className="home__input" 
          onChange={e => {setInputText(e.target.value); filterCoinsList(e.target.value)}}
        ></input>
      </div>
      <section>
        <ul className="home__list">
          {
            isLoading ? <Loading/> : (
              coinsList.map(coin => (
                <CoinInfo
                key={coin.id}
                id={coin.id}
                name={coin.name}
                imgUrl={coin.image}
                currentPrice={
                  Intl.NumberFormat('pt-BR', {
                    style: 'currency',
                    currency: 'BRL'
                  }).format(coin.current_price)
                }
                marketCap={
                  Intl.NumberFormat('pt-BR', {
                    style: 'currency',
                    currency: 'BRL'
                  }).format(coin.market_cap)
                }/>
              ))
            )
          }
        </ul>
      </section>
      <section>
        <ChangePage setIsLoading={setIsLoading}/>
      </section>
    </main>
  )
}