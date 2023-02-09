import React from 'react'
import { Route, Routes } from 'react-router-dom'
import About from './About'
import Contact from './Contact'
import Eror404 from './Eror404'
import Home from './Home'
import Navbar from './Navbar'
import User from './User'
import UserDetail from './UserDetail'

export default function Container() {
    const users = [
        {
            id: "001",
            name: "Nhân",
            email: "abc@gmail.com",
            phone: 123456789,
        },
        {
            id: "002",
            name: "Minh",
            email: "minh@gmail.com",
            phone: 123456789,
        },
        {
            id: "003",
            name: "Khoa Bug",
            email: "khoa@gmail.com",
            phone: 123456789,
        },
        {
            id: "004",
            name: "Nhân 2",
            email: "nhân@gmail.com",
            phone: 123456789
        },
        {
            id: "005",
            name: "Nhân",
            email: "abc@gmail.com",
            phone: 123456789,
        },
        {
            id: "006",
            name: "Minh",
            email: "minh@gmail.com",
            phone: 123456789,
        },
        {
            id: "007",
            name: "Khoa Bug",
            email: "khoa@gmail.com",
            phone: 123456789,
        },
        {
            id: "008",
            name: "Nhân 2",
            email: "nhân@gmail.com",
            phone: 123456789
        }
    ]

    return (
        <div>
            <div className="container">
                {/* Nav */}
                <Navbar/>
                {/* Nav */}
                <Routes>
                    <Route path='/' element={<Home/>} />
                    <Route path='/about' element={<About/>} />
                    <Route path='/user' element={<User users={users}/>} >
                        
                    </Route>
                    <Route path='/user/:userId' element={<UserDetail users={users}/>} />
                    <Route path='/contact' element={<Contact/>} />
                    <Route path='*' element={<Eror404/>} />
                </Routes>
            </div>
        </div>
    )
}
