import React from 'react'
import { Link } from 'react-router-dom'

export default function HomePage() {
    return (
        <div className='border-dark border-bottom'>
            <header className="logo text-center">
                <img
                    src="https://learn.rikkeiacademy.com/static/media/RIKKEI_ACADEMY_LOGO.e997e6f7.png"
                    alt=""
                />
                <Link to={"/"} className="h1 text-decoration-none d-block text-danger">Rikkie Academy</Link>
            </header>
            <nav className="text-center">
                <Link to={'/invoices'} className="px-2 border-end d-inline-block mb-3" >
                    Invoices
                </Link>
                <Link to={'/expense'} className="px-2 d-inline-block">
                    Expenses
                </Link>
            </nav>
        </div>
    )
}
