import React, { useState } from 'react'
import UserCard from './UserCard'

function Users() {
    const [userInfo, setUserInfo] = useState([{
        firstName: "Naruto",
        lastName: "Dalal",
        _id: 1
    },
    {
        firstName: "Goku",
        lastName: "Jaat",
        _id: 2
    },
    {
        firstName: "Vegita",
        lastName: "Yadav",
        _id: 3
    },])

    return (
        <div>
            <div className="font-bold mt-6 text-lg text-pay-default">
                Users
            </div>
            <div className="my-2">
                <input type="text" placeholder='Search User..'
                    className="w-full px-2 py-1 border rounded border-slate-200" />
            </div>
            <div>
                {
                    userInfo.map((user) => <UserCard user={user} />)
                }
            </div>
        </div>
    )
}

export default Users