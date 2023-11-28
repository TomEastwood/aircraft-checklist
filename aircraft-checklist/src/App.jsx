import './App.css'
import { Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import AirframePage from './components/AirframePage'
import Checklists from './components/Checklists'

function App() {

  return (
    <>
    <div className="background-section">
      <div className="header-area">
        <Header />
      </div>
      <div className="main-area">
      <Routes>
        <Route className="main-area" path="/" element={<AirframePage />} />
        <Route path="/{aircraft}" element={<Checklists />} />
      </Routes>
      </div>
    </div>
    </>
  )
}

export default App
