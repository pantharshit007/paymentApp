import React from 'react'

function Balance({ amount }) {
    return (
        <div className='flex m-8'>
            <div className='font-bold text-lg text-pay-default'>
                Balance:
            </div>
            <div className="font-semibold ml-4 text-lg">
                ₹ {amount}
            </div>
        </div>
    )
}

export default Balance