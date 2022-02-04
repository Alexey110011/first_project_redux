import * as React from "react"
import './App.css';
import Map from'./Map.js'
import {Diary1} from'./Diary.js'
import {Routes,
        Route,
        Link        
    } from "react-router-dom"
import {Tablo} from './Tablo.js'




function App() {
 
  return (
    <div className="App">
<Routes>
  <Route path = "/" element = {<Tablo/>}/>
  <Route path = "map" element = {<Map/>}/>
</Routes>
</div>
 );
}
<>
<nav>
  <Link to ="/map">Maps</Link>
</nav>
</>

export default App;
