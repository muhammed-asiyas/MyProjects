import {Link, withRouter} from 'react-router-dom'
import Cookies from 'js-cookie'
import './header.css'

const Header = props => {
  const OnClickLogoutButton = () => {
    const {history} = props
    Cookies.remove('jwt_token')
    history.replace('/login')
  }

  return (
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
        <button className='logout-btn' type='submit' onClick={OnClickLogoutButton}>
          Logout
        </button>
      </ul>
    </nav>
  )
}

export default withRouter(Header)
