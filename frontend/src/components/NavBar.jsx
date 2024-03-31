import React from 'react'

function NavBar() {
    return (
        <div className='flex justify-between bg-pay-dark h-14'>
            <div className='flex justify-center items-center ml-4 text-white font-semibold'>
                PayTM App
            </div>
            <div className='flex  '>
                <div className='mr-4 h-full flex justify-center items-center text-white'>
                    Hello, User</div>
                <div className="rounded-full h-9 w-9 bg-pay-light flex justify-center my-auto mr-4 ">
                    <div className="flex justify-center items-center h-full w-full text-white text-lg">
                        U
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NavBar