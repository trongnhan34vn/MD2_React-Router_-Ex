import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'

export default function UserDetail(props) {
    const [selectUser, setSetlectUser] = useState("")
    const data = useLocation()
    const userId = data.state
    const {users} = props
    useEffect(() => {
      users.forEach(user => {
        if(user.id === userId){
            setSetlectUser(user)
        }
    },[])
    })
    console.log(selectUser);
    return (
        <div>
            <section className="user-detail-section">
                <h3 className="user-detail-title mb-3">User Detail</h3>
                <div className="user-detail d-flex gap-5">
                    <div className="user-detail-content bg-light p-2 rounded-3 w-50">
                            <p className="mb-1 mt-1">
                                <span className="fw-bold">Usersname:</span> {selectUser.name}
                            </p>
                            <p className="mb-1 mt-1">
                                <span className="fw-bold">Email:</span> {selectUser.email}
                            </p>
                            <p className="mb-1 mt-1 mb-4">
                                <span className="fw-bold">Phone:</span> {selectUser.phone}
                            </p>
                    </div>
                    <div className="user-detail-img flex-fill bg-light p-2 rounded-3">
                        <img
                            className="mb-3"
                            src="https://www.rgo.ru/sites/default/files/styles/head_image_article/public/node/40697/buzulukskiy-bor-orenburgskaya-oblast.jpg?itok=rRUzzwBr"
                            alt=""
                        />
                        <p className="text-center">Abcdkjsafnjksanf</p>
                    </div>
                </div>
            </section>
        </div>
    )
}
