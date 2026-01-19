import React from 'react'
import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <header className='container-fluid bg-danger'>
      <div className="container">
        <div className="row align-items-center">
          <div className="logo col-auto">
            <h2>Nov 25</h2>
          </div>
          <nav className='col-auto'>
            <ul className='d-flex'>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About</Link></li>
              <li><Link to="/phones">Phones</Link></li>
            </ul>
          </nav>

        </div>
      </div>
    </header>
  )
}
