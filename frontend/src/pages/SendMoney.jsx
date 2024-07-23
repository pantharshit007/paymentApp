import React, { useState } from 'react'
import Heading from '../components/Heading'
import { useSearchParams, useNavigate } from 'react-router-dom'
import axios from 'axios'
import toast from 'react-hot-toast'
import BACKEND_URL from '../utils/apiConfig'

function SendMoney() {
    const [searchParams] = useSearchParams();
    const id = searchParams.get('id');
    const name = searchParams.get('name');
    const [amount, setAmount] = useState(0);
    const [success, setSuccess] = useState(null);
    const navigate = useNavigate();

    async function submitHandler() {
        const URL = BACKEND_URL + "account/transfer"
        const accessToken = localStorage.getItem('token');

        try {
            const response = await axios.post(URL, {
                to: id,
                amount: amount,
            }, {
                headers: {
                    Authorization: 'Bearer ' + accessToken,
                }
            });

            if (response.status === 200) {
                // console.log("Transaction success");
                setSuccess(true);
                toast.success("Transfer successful");
            }

        } catch (error) {
            console.error('Error:', error.response.data);
            toast.error("Transfer failed: " + error.response.data.message);
        }
    }

    function returnHandler() {
        navigate('/dashboard');
    }



    return (
        <div className="flex justify-center h-screen bg-slate-400">
            <div className="h-full flex flex-col justify-center">
                <div className="border h-min max-w-md p-4 space-y-8 w-96 bg-white shadow-lg rounded-lg">
                    {/* Heading */}
                    <div className="flex flex-col justify-center items-center space-y-1 px-6">
                        <Heading label={"Send Money"} />
                    </div>

                    {/* Lower part of card */}
                    <div className='p-6'>
                        {/* Receiver Name */}
                        <div className="flex items-center space-x-4">
                            <div className="w-12 h-12 rounded-full bg-pay-light flex items-center justify-center">
                                <span className="text-2xl text-white uppercase">{name[0]}</span>
                            </div>
                            <h3 className="text-2xl font-semibold">{name}</h3>
                        </div>

                        {/* Input - button */}
                        <div className='space-y-3'>
                            {/* Input */}
                            <div className="space-y-2">
                                <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70" htmlFor="amount">
                                    Amount (in Rs)
                                </label>

                                <input type="number" id="amount" placeholder='Enter Amount'
                                    onChange={(e) => setAmount(e.target.value)}
                                    value={success && 0}
                                    className='flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm' />

                            </div>

                            {/* Button */}
                            <button className="flex justify-center rounded-md text-sm font-medium ring-offset-background transition-colors h-10 px-4 py-2 w-full bg-pay-light hover:bg-pay-default text-white"
                                onClick={submitHandler}>
                                Initiate Transfer
                            </button>

                            <button className="flex justify-center rounded-md text-sm font-medium ring-offset-background transition-colors h-10 px-4 py-2 w-full bg-pay-light hover:bg-pay-default text-white"
                                onClick={returnHandler}>
                                Back to Dashboard
                            </button>

                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default SendMoney