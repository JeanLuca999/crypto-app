import './style.css'

import {useNavigate} from "react-router-dom"

export default function ChangePage() {

  let navigate = useNavigate()

  return (
    <div className="ChangePage">
      <button className="ChangePage__button" onClick={() => navigate("/1")}>1</button>
      <button className="ChangePage__button" onClick={() => navigate("/2")}>2</button>
      <button className="ChangePage__button" onClick={() => navigate("/3")}>3</button>
      <button className="ChangePage__button" onClick={() => navigate("/4")}>4</button>
      <button className="ChangePage__button" onClick={() => navigate("/5")}>5</button>
      <button className="ChangePage__button" onClick={() => navigate("/6")}>6</button>
      <button className="ChangePage__button" onClick={() => navigate("/7")}>7</button>
      <button className="ChangePage__button" onClick={() => navigate("/8")}>8</button>
      <button className="ChangePage__button" onClick={() => navigate("/9")}>9</button>
      <button className="ChangePage__button" onClick={() => navigate("/10")}>10</button>
    </div>
  )
}