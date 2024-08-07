import React, { useEffect, useState } from 'react'
import NavBar from '../components/NavBar'
import Balance from '../components/Balance'
import Users from '../components/Users'
import axios from 'axios'
import BACKEND_URL from '../utils/apiConfig'

function Dashboard() {
    const [balance, setBalance] = useState(0)
    const [loggedInUserId, setLoggedInUserId] = useState(null)
    const [username, setUsername] = useState('')

    useEffect(() => {
        const URL = BACKEND_URL + "account/balance"
        const token = localStorage.getItem('token')
        axios.get(URL, {
            headers: {
                Authorization: "Bearer " + token
            }
        })
            .then(response => {
                if (response.status === 200) {
                    setBalance(response.data.balance);
                    setLoggedInUserId(response.data.id);
                    setUsername(response.data.firstName);
                    // console.log(response.data);
                }
            })
            .catch(error => {
                console.error('Error fetching balance:', error.message);
            });
    }, [balance]);


    return (
        <div>
            <NavBar username={username} />
            <Balance amount={balance} />
            <div className='w-10/12 mx-auto'>
                <Users userId={loggedInUserId} />
            </div>
        </div>
    )
}

export default Dashboard