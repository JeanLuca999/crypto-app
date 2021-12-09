import './style.css'

import {useNavigate} from "react-router-dom"

export default function ChangePage({setIsLoading}) {

  let navigate = useNavigate()

  function handleChangePage(page) {
    navigate(page)
    setIsLoading(true)
  }

  return (
    <div className="ChangePage">
      <button className="ChangePage__button" onClick={() => handleChangePage("/1")}>1</button>
      <button className="ChangePage__button" onClick={() => handleChangePage("/2")}>2</button>
      <button className="ChangePage__button" onClick={() => handleChangePage("/3")}>3</button>
      <button className="ChangePage__button" onClick={() => handleChangePage("/4")}>4</button>
      <button className="ChangePage__button" onClick={() => handleChangePage("/5")}>5</button>
      <button className="ChangePage__button" onClick={() => handleChangePage("/6")}>6</button>
      <button className="ChangePage__button" onClick={() => handleChangePage("/7")}>7</button>
      <button className="ChangePage__button" onClick={() => handleChangePage("/8")}>8</button>
      <button className="ChangePage__button" onClick={() => handleChangePage("/9")}>9</button>
      <button className="ChangePage__button" onClick={() => handleChangePage("/10")}>10</button>
    </div>
  )
}