import React from 'react'
import { Link } from 'react-router-dom'

function Home() {
    return (
        <div className="flex justify-center items-center flex-col h-screen gap-y-1 bg-slate-300">

            <p className="font-bold italic text-pay-default">Hi Mom!</p>
            <Link to={'/signin'} className="rounded-sm py-1 px-2 bg-pay-light text-white">Click to Sign In</Link>

        </div>
    )
}

export default Home