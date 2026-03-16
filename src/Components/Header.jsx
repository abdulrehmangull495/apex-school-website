
import { NavLink } from 'react-router-dom'
import { useState } from 'react'
import "./Header.css"
const Header = () => {
    const [menuOpen, setmenuOpen] = useState(false)
    const handleclick=()=>setmenuOpen(false)
  return (
    <header>
        <nav>
          <h1 className="logo">Arecom</h1>       
        <div className='hamburger' onClick={()=> setmenuOpen(!menuOpen)}>
            {menuOpen ? "X":"☰"}
        </div>
            <ul className={menuOpen ? "nav-links active" : "nav-links"}>
                 
                <li><NavLink to="/" onClick={handleclick}>Home</NavLink></li>
                <li><NavLink to="/About" onClick={handleclick}>About</NavLink></li>
                <li><NavLink to="/Admission" onClick={handleclick}>Admission</NavLink></li>
            </ul>
        </nav>
    </header>
  )
}

export default Header
