import './App.css';

import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Home from './pages/Home';
import CoinPage from './pages/CoinPage';

export default function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}  />
        <Route path="/:page" element={<Home/>} />
        <Route path="coins/:id" element={<CoinPage/>} />
      </Routes>
    </BrowserRouter>
    </>
  )
}