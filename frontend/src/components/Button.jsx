import React from 'react'

function Button({ label, onClick, type }) {
    return (

        <button className="w-full text-white bg-pay-light hover:bg-pay-default focus:outline-none focus:scale-95  font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2"
            type={type ? type : "button"} onClick={onClick}>{label}</button>

    )
}

export default Button