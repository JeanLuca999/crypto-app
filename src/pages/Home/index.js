import { useEffect, useState } from 'react'
import './style.css'

export default function Home() {
  const [coinsList, setCoinsList] = useState([])

  async function getCoinsList() {
    const url = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=brl&order=market_cap_desc&per_page=100&page=1&sparkline=false'
    const response = await fetch(url)
    const responseData = await response.json()
    setCoinsList(responseData)
  }

  useEffect(() => {
    getCoinsList()
  }, [])

  return (
    <main className="home">
      <h1 className="home__title">Crypto App</h1>
      <div className="home__search-container">
        <input type="text" placeholder="Bitcoin" className="home__input"></input>
      </div>
    </main>
  )
}