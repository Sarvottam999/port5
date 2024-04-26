
import { Route, Routes } from 'react-router-dom'
import './App.css'
import HomePage from './pages/HomePage'
import Layout from './pages/Layout'
import BlogPage from './pages/BlogPage'
import BlogDetailPage from './pages/BlogDetailPage'
import ContactPage from './pages/ContactPage'

function App() {

  return (
    <>

<Routes>
        <Route path="/port5/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="/port5/blogs" element={<BlogPage />} />
          <Route path="/port5/blogs/detail/:id" element={<BlogDetailPage />} />
          <Route path="/port5/contact" element={<ContactPage />} />
        

        </Route>
      </Routes>


     
   
    </>
  )
}

export default App

