import React, { useEffect, useState } from 'react'
import UserCard from './UserCard'
import axios from 'axios'

function Users({ userId }) {
    const URL = "http://localhost:4000/api/v1/user/bulk?filter="
    const [userInfo, setUserInfo] = useState([])
    const [filter, setFilter] = useState('')

    useEffect(() => {
        axios.get(URL + filter)
            .then(response => {
                const allUsers = response.data.user;
                // Filter out the logged-in user from the list
                const filteredUsers = allUsers.filter(user => user.id !== userId);
                setUserInfo(filteredUsers);
            })
    }, [filter, userId]);

    return (
        <div>
            <div className="font-bold mt-6 text-lg text-pay-default">
                Users
            </div>
            <div className="my-2">
                <input type="text" placeholder='Search User..'
                    onChange={(e) => setFilter(e.target.value)}
                    className="w-full px-2 py-1 border rounded border-slate-200" />
            </div>
            <div>
                {
                    userInfo.map((user) => <UserCard user={user} key={user.id} />)
                }
            </div>
        </div>
    )
}

export default Users