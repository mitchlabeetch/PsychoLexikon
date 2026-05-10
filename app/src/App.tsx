import { Navigate, Route, Routes } from 'react-router-dom'
import ScrollToTop from './components/ScrollToTop'
import Home from './pages/Home'
import NotFoundPage from './pages/NotFoundPage'
import CategoryPage from './pages/CategoryPage'
import SubjectPage from './pages/SubjectPage'
import Layout from './components/Layout'
import { ARTICLE_INDEX_PATH, ARTICLE_ROUTE_PATH, CATEGORY_ROUTE_PATH, HOME_PATH } from './routing/routes'

export default function App() {
  return (
    <>
      <ScrollToTop />
      <Layout>
        <Routes>
          <Route path={HOME_PATH} element={<Home />} />
          <Route path={ARTICLE_INDEX_PATH} element={<Navigate to={HOME_PATH} replace />} />
          <Route path={CATEGORY_ROUTE_PATH} element={<CategoryPage />} />
          <Route path={ARTICLE_ROUTE_PATH} element={<SubjectPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Layout>
    </>
  )
}
