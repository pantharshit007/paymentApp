import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'


function NavBar({ username }) {
    const [showModal, setShowModal] = useState(true);
    const navigate = useNavigate()

    function logout() {
        localStorage.setItem('isLoggedIn', false);
        localStorage.removeItem('token');
        navigate('/signin')
    }

    return (
        <div className='flex justify-between bg-pay-dark h-14'>
            <div className='flex justify-center items-center ml-4 text-white font-semibold pointer'>
                <Link to={'/'}>PayTM App</Link>

            </div>
            <div className='flex relative transition-all duration-200'>
                <div className='mr-4 h-full flex justify-center items-center text-white '>
                    Hello, {username}
                </div>
                <div className="rounded-full h-9 w-9 bg-pay-light flex justify-center my-auto mr-4 ">
                    <button className="flex justify-center items-center h-full w-full text-white text-lg uppercase"
                        onClick={() => setShowModal(!showModal)}>
                        {username[0]}
                    </button>
                </div>
                <div className={`absolute h-min min-w-min py-2 px-3 bg-white top-12 right-4 border-2 border-pay-light rounded-md shadow-lg hover:bg-slate-50 
                ${showModal ? 'hidden' : 'block'}`}>
                    <button className="text-pay-default font-semibold italic "
                        onClick={logout}>
                        Logout →
                    </button>
                </div>
            </div>

        </div>
    )
}

export default NavBar