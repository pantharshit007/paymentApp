import React from 'react'
import { Link } from 'react-router-dom'

function Warning({ label, btnText, destination }) {
    return (
        <div className="py-2 text-sm flex justify-center">
            <div>
                {label}
            </div>
            <Link className="pointer underline pl-1 cursor-pointer" to={destination}>
                {btnText}
            </Link>
        </div>
    )
}

export default Warning