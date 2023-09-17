// Write your JS code here

import {Link} from 'react-router-dom'

import './index.css'

const Header = () => (
  <ul className="ul">
    <div>
      <img
        src="https://assets.ccbp.in/frontend/react-js/wave-logo-img.png"
        alt="wave"
        className="img-wave"
      />
    </div>
    <div className="list-con">
      <Link to="/">
        <li className="under">Home</li>
      </Link>
      <Link to="/about">
        <li className="under">About</li>
      </Link>
      <Link to="/contact">
        <li className="under">Contact</li>
      </Link>
    </div>
  </ul>
)

export default Header
