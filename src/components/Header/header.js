import {Link} from 'react-router-dom'
import './header.css'

const Header = () => (
    <nav className='nav-container'>
      <div className='nav-logo-container'>
        <h1 className='logo-item'>MY Projects</h1>
      </div>
      <ul className='nav-items-container'>
        <Link to="/" className="nav-item-link">
          Home
        </Link>
        <Link to="/project" className="nav-item-link">
          Projects
        </Link>
        <Link to="/contact" className="nav-item-link">
          <li>Contact</li>
        </Link>
        <Link to="/about" className="nav-item-link">
          <li>About</li>
        </Link>
      </ul>
    </nav>
)

export default Header
