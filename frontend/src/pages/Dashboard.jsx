import React, { useEffect, useState } from 'react'
import NavBar from '../components/NavBar'
import Balance from '../components/Balance'
import Users from '../components/Users'
import axios from 'axios'

function Dashboard() {
    const [balance, setBalance] = useState("00")
    const [loggedInUserId, setLoggedInUserId] = useState(null)
    const [username, setUsername] = useState('')

    useEffect(() => {
        const URL = "http://localhost:4000/api/v1/account/balance"
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
    }, []);


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