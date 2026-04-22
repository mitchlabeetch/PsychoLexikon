import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import SubjectPage from './pages/SubjectPage'
import Layout from './components/Layout'

export default function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/thema/:id" element={<SubjectPage />} />
      </Routes>
    </Layout>
  )
}
