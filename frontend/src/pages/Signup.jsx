import React, { useState } from 'react'
import Heading from '../components/Heading'
import SubHeading from '../components/SubHeading'
import InputBox from '../components/InputBox'
import Button from '../components/Button'
import Warning from '../components/Warning'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import toast, { Toaster } from 'react-hot-toast';

function Signup() {
    const navigate = useNavigate();
    const URL = "http://localhost:4000/api/v1/user/signup";

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    async function submitHandler() {
        // Input validation
        if (!firstName || !lastName || !username || !password || password.length < 6) {
            toast.error('Wrong Input! Try Again.')
            return;
        }

        const requestData = {
            firstName,
            lastName,
            username,
            password
        };

        try {
            const response = await axios.post(URL, requestData);

            if (response.data.success) {
                //storing token in LocaStorage
                localStorage.setItem('token', response.data.token);
                // console.log("check: " + response.data.token);
                toast.success('Account Created Successfully!')
                navigate("/dashboard")
            }
            // else {
            //     console.log("error: " + response.data.msg);
            //     toast.error("Error: " + response.data.msg);
            //     toast.warning('Please Check your Info')
            // }
        } catch (error) {
            console.error('Error:', error.message);
            toast.error('Email already in Use.');
        }


    }

    return (
        <div className='bg-slate-400 h-screen w-full flex justify-center items-center'>
            <div className='flex justify-center w-full'>
                <div className="rounded-lg bg-white w-96 text-center p-2 h-max px-4 ">
                    <Heading label={"Sign Up"} />
                    <SubHeading label={"Enter Info to Create Account"} />

                    <InputBox label={"First Name"} placeholder={"Harshit"}
                        onChange={(e) => setFirstName(e.target.value)} />
                    <InputBox label={"Last Name"} placeholder={"Pant"}
                        onChange={(e) => setLastName(e.target.value)} />
                    <InputBox label={"username"} placeholder={"pantharshit007@gmail.com"}
                        onChange={(e) => setUsername(e.target.value)} />
                    <InputBox label={"Password"} placeholder={"123456"}
                        onChange={(e) => setPassword(e.target.value)} />

                    <div className='pt-4'>
                        <Button label={"Sign Up"} onClick={() => submitHandler()} />
                    </div>
                    <Toaster
                        position="top-center"
                        reverseOrder={false}
                    />
                    <Warning label={"Already have an Account?"} btnText={"Sign In"} destination={"/Signin"} />
                </div>
            </div>
        </div>
    )
}

export default Signup