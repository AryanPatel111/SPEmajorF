import React from 'react'
import { BrowserRouter , Routes , Route }  from 'react-router-dom'
import Home from './core/Home'
import Map1 from './core/Map1'

const Routesrenamed = () =>{
    return(
        <BrowserRouter>
        <Routes>
            <Route path="/" exact element={<Home/>} />
            <Route path="/display" exact element={<Map1/>} />
        </Routes>
        </BrowserRouter>
    )
}
export default Routesrenamed;