import React from 'react'
import NavBar from '../components/NavBar'
import Balance from '../components/Balance'
import Users from '../components/Users'

function Dashboard() {
    return (
        <div>
            <NavBar />
            <Balance amount={'10,000'} />
            <div className='w-10/12 mx-auto'>
                <Users />
            </div>
        </div>
    )
}

export default Dashboard