import {BrowserRouter, Routes,Route} from 'react-router-dom'
import Layout from './Pages/Layout/layout'
import Navbar from './Components/navbar'
import About from './Pages/About/about'
import Home from './Pages/Home/home'
import './App.css'
import {bubbleCursor} from './util/cursorEffect'
import {useEffect} from 'react'

function App() {
 useEffect(() => {
    bubbleCursor()
 })
  return (
    <BrowserRouter>
    <Navbar/>
    <Routes>
     <Route  path ="/" element={<Layout/>}>
        <Route index element={<Home/>}/>
       <Route path ="/about" element={<About/>}/>
       {/*}
       <Route path ="/contact" element={}/>
       <Route path ="/projects" element={}/> */}
     </Route>
    </Routes>
    
 </BrowserRouter>
  )
}

export default App
