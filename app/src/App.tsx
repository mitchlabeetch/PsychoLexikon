import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Aktionspotential from './pages/Aktionspotential'
import Gestaltgesetze from './pages/Gestaltgesetze'
import Arbeitsgedaechtnis from './pages/Arbeitsgedaechtnis'
import Konditionierung from './pages/Konditionierung'
import BisModell from './pages/BisModell'
import Piaget from './pages/Piaget'
import Attribution from './pages/Attribution'
import BigFive from './pages/BigFive'
import Versuchsplanung from './pages/Versuchsplanung'
import Signifikanztestung from './pages/Signifikanztestung'
import Psychometrie from './pages/Psychometrie'
import MotivationEmotion from './pages/MotivationEmotion'

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/aktionspotential" element={<Aktionspotential />} />
      <Route path="/gestaltgesetze" element={<Gestaltgesetze />} />
      <Route path="/arbeitsgedaechtnis" element={<Arbeitsgedaechtnis />} />
      <Route path="/konditionierung" element={<Konditionierung />} />
      <Route path="/bis-modell" element={<BisModell />} />
      <Route path="/piaget" element={<Piaget />} />
      <Route path="/attribution" element={<Attribution />} />
      <Route path="/big-five" element={<BigFive />} />
      <Route path="/versuchsplanung" element={<Versuchsplanung />} />
      <Route path="/signifikanztestung" element={<Signifikanztestung />} />
      <Route path="/psychometrie" element={<Psychometrie />} />
      <Route path="/motivation-emotion" element={<MotivationEmotion />} />
    </Routes>
  )
}
