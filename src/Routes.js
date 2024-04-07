import React from 'react'
import { BrowserRouter , Routes , Route }  from 'react-router-dom'
import Home from './core/Home'
import Map1 from './core/Map1'
import About from './core/About'
import { BellmanFord } from './core/BellmanFord'
import { Dijkstra } from './core/Dijkstra'
import { Astar } from './core/Astar'

const Routesrenamed = () =>{
    return(
        <BrowserRouter>
        <Routes>
            <Route path="/" exact element={<Home/>} />
            <Route path="/display" exact element={<Map1/>} />
            <Route path="/about" exact element={<About/>} />
            <Route path="/about/bellmanFord" exact element={<BellmanFord/>} />
            <Route path="/about/dijkstra" exact element={<Dijkstra/>} />
            <Route path="/about/astar" exact element={<Astar/>} />
        </Routes>
        </BrowserRouter>
    )
}
export default Routesrenamed;