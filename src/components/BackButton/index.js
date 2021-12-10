import { useNavigate } from 'react-router-dom'

import './style.css'
import imgSRC from '../../assets/leftArrow.svg'

export default function BackButton() {
  let navigate = useNavigate()

  function handleNavigate() {
    navigate(-1)
  }

  return (
    <button className="BackButton" onClick={handleNavigate} title="voltar">
      <img src={imgSRC} alt="back" className="BackButton__img"></img>
    </button>
  )
}