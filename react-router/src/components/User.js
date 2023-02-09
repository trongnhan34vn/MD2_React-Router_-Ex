import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function User(props) {
    const {users} = props
    const navigate = useNavigate()

    const elementUser = users.map((user, index) => {
        return <div key={index} className="users-list-item col-3 overflow-hidden mb-3">
            <img
                className="w-100 rounded-top rounded-3"
                src="https://wrha.mb.ca/files/headline-22-01-24-winter-walks-are-worth-the-challenge.png"
                alt=""
            />
            <div className="user-list-item-header bg-light p-2">
                <h3 className="mb-2">Leean Galam</h3>
            </div>
            <div className="user-list-item-body bg-light p-2 rounded-bottom rounded-3">
                <p className="mb-1 mt-1">
                    <span className="fw-bold">Usersname:</span> {user.name}
                </p>
                <p className="mb-1 mt-1">
                    <span className="fw-bold">Email:</span> {user.email}
                </p>
                <p className="mb-1 mt-1 mb-4">
                    <span className="fw-bold">Phone:</span> {user.phone}
                </p>
                <button onClick={() => navigate('userdetail', {state: user.id})} className="btn btn-primary mb-3">Show More Details</button>
            </div>
        </div>
    })

    return (
        <div>
            <section className="users-section">
                <h3 className="users-title">Users</h3>
                <div className="users-list row">
                    {elementUser}
                </div>
            </section>
        </div>
    )
}
