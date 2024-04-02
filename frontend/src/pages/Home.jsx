import React from 'react'
import { Link } from 'react-router-dom'

function Home() {
    return (
        <div className="flex justify-center items-center flex-col h-screen gap-y-1 bg-slate-300">

            <p className="font-bold italic text-pay-default">Hi Mom!</p>
            <div className='flex space-x-4'>
                <Link to={'/signin'} className="rounded-sm py-1 px-3 bg-pay-light text-white">
                    Sign In</Link>
                <Link to={'/dashboard'} className="rounded-sm py-1 px-2 bg-pay-light text-white">
                    Dashboard</Link>
            </div>

        </div>
    )
}

export default Home