/*Исходный  материал - {https://www.youtube.com/@VladilenMinin}*/
import {Route, Routes} from 'react-router-dom'
import Navigation from './components/Navigation';
import AboutPages from './components/pages/AboutPages';
import ProductPage from './components/pages/ProductPage'

function App() {
  return(
    <>
    <Navigation/>
    <Routes>
      <Route path='/' element={<ProductPage/>}/>
      <Route path='/about' element={<AboutPages/>}/>
    </Routes>
    </>
  )
  
}

export default App;

//t-code 01 35 39