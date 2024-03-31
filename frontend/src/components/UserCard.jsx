import React from 'react'
import Button from './Button'

function UserCard({ user }) {
    return (
        <div className="flex justify-between">
            {/* Name */}
            <div className='flex  '>
                <div className="rounded-full h-10 w-10 bg-pay-light flex justify-center my-auto mr-2 ">
                    <div className="flex justify-center items-center h-full  text-white text-xl">
                        {user.firstName[0]}
                    </div>
                </div>
                <div className='mr-4 h-full flex justify-center items-center '>
                    {user.firstName} {user.lastName}
                </div>
            </div>
            {/* Button */}
            <div className='flex justify-center flex-col h-full'>
                <Button label={"Send Money"} />
            </div>


        </div>
    )
}

export default UserCard