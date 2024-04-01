import React from 'react'
import { Link } from 'react-router-dom'

function NavBar({ username }) {
    return (
        <div className='flex justify-between bg-pay-dark h-14'>
            <div className='flex justify-center items-center ml-4 text-white font-semibold pointer'>
                <Link to={'/'}>PayTM App</Link>

            </div>
            <div className='flex  '>
                <div className='mr-4 h-full flex justify-center items-center text-white'>
                    Hello, {username}</div>
                <div className="rounded-full h-9 w-9 bg-pay-light flex justify-center my-auto mr-4 ">
                    <div className="flex justify-center items-center h-full w-full text-white text-lg uppercase">
                        {username[0]}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NavBar