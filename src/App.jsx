import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './Pages/Home/Home'
import Layout from './LAYOUT/Layout'
import Aboutme from './Pages/Aboutme'
import Center2 from './Pages/CENTER/Center2'
import End2 from './Pages/ENDSAYT/End2'

function App() {


  return (
    <Layout>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<Aboutme />} />
        <Route path='/center' element={<Center2 />} />
        <Route path='/end2' element={<End2 />} />
      </Routes>
    </Layout>

  )
}

export default App
