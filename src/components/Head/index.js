import './index.css' 
import {Link} from 'react-router-dom'

const Head=()=><div className='headLayput'>
    <div className='logAndName'>
        <img src="https://assets.ccbp.in/frontend/react-js/wave-logo-img.png" alt="wave" className='logoStyling'/> 
        <p>Wave</p>
        </div> 
    <ul className='namesList'>
        <Link to="/" className='listNameStyling'><li>Home</li></Link>  
        <Link to="/about" className='listNameStyling'><li>About</li></Link>  
        <Link to="/contact" className='listNameStyling'><li>Contact</li></Link> 
    </ul>
</div> 



export default Head