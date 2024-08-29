import './App.css'  
import {Routes, Route} from 'react-router-dom'
import Home from './components/Home'  
import About from './components/About' 
import Contact from './components/Contact'


const App=()=><div className='background'> 
<Routes>
    <Route path='/' Component={Home}/>
    <Route path='/about' Component={About}/> 
    <Route path='/contact' Component={Contact}/>
</Routes>

    
</div>

export default App