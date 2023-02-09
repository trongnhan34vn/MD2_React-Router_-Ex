import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Navbar() {
    return (
        <div>
            <header className="d-flex flex-wrap justify-content-center py-3 mb-4 border-bottom">
                <a
                    href="/"
                    className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-dark text-decoration-none"
                >
                    <svg className="bi me-2" width={40} height={32}>
                        <use xlinkHref="#bootstrap" />
                    </svg>
                    <span className="fs-4">Simple header</span>
                </a>
                <ul className="nav nav-pills">
                    <li className="nav-item">
                        <NavLink to={'/'} className="nav-link" aria-current="page">
                            Home
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to={'/about'} className="nav-link">
                            About
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to={'/user'} className="nav-link">
                            Users
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to={'/contact'} className="nav-link">
                            Contact
                        </NavLink>
                    </li>
                    {/* <li className="nav-item">
                        <a href="#" className="nav-link" />
                    </li> */}
                </ul>
            </header>
        </div>
    )
}
