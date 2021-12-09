import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import ChangePage from '../../components/ChangePage'
import CoinInfo from '../../components/CoinInfo'
import './style.css'

export default function Home() {
  const [coinsList, setCoinsList] = useState([])
  const [allCoins, setAllCoins] = useState([])
  const [inputText, setInputText] = useState('')
  const {page} = useParams()

  async function getCoinsList() {
    const url = `https://api.coingecko.com/api/v3/coins/markets?vs_currency=brl&order=market_cap_desc&per_page=15&page=${page || 1}&sparkline=false`
    const response = await fetch(url)
    const responseData = await response.json()

    setCoinsList(responseData)
    setAllCoins(responseData)
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
            coinsList.map(coin => (
              <CoinInfo
              key={coin.id}
              name={coin.name}
              imgUrl={coin.image}
              currentPrice={coin.current_price}
              marketCap={coin.market_cap}/>
            ))
          }
        </ul>
      </section>
      <section>
        <ChangePage/>
      </section>
    </main>
  )
}