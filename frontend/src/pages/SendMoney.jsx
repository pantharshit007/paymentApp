import React from 'react'
import Heading from '../components/Heading'

function SendMoney() {
    return (
        <div className="flex justify-center h-screen bg-slate-400">
            <div className="h-full flex flex-col justify-center">
                <div className="border h-min max-w-md p-4 space-y-8 w-96 bg-white shadow-lg rounded-lg">
                    <div className="flex flex-col justify-center items-center space-y-1 px-6">
                        <Heading label={"Send Money"} />
                    </div>

                    {/* Lower part of card */}
                    <div className='p-6'>
                        {/* Receiver Name */}
                        <div className="flex items-center space-x-4">
                            <div className="w-12 h-12 rounded-full bg-pay-light flex items-center justify-center">
                                <span className="text-2xl text-white">A</span>
                            </div>
                            <h3 className="text-2xl font-semibold">Anonymous</h3>
                        </div>

                        {/* Input - button */}
                        <div className='space-y-4'>
                            <div className="space-y-2">
                                <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70" htmlFor="amount">
                                    Amount (in Rs)
                                </label>

                                <input type="number" id="amount" placeholder='Enter Amount'
                                    className='flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm' />

                            </div>

                            <button className="flex justify-center rounded-md text-sm font-medium ring-offset-background transition-colors h-10 px-4 py-2 w-full bg-pay-light hover:bg-pay-default text-white">
                                Initiate Transfer
                            </button>

                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default SendMoney