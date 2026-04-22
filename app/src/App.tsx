import { Navigate, Route, Routes } from 'react-router-dom'
import ScrollToTop from './components/ScrollToTop'
import Home from './pages/Home'
import NotFoundPage from './pages/NotFoundPage'
import SubjectPage from './pages/SubjectPage'
import Layout from './components/Layout'

export default function App() {
  return (
    <>
      <ScrollToTop />
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/thema" element={<Navigate to="/" replace />} />
          <Route path="/thema/:id" element={<SubjectPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Layout>
    </>
  )
}
