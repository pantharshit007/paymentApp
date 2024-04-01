import React, { useState } from 'react'
import Heading from '../components/Heading'
import SubHeading from '../components/SubHeading'
import InputBox from '../components/InputBox'
import Button from '../components/Button'
import Warning from '../components/Warning'
import { useNavigate } from 'react-router-dom'
import axios from "axios"
import toast from 'react-hot-toast';

function Signin() {
    const navigate = useNavigate();
    const URL = "http://localhost:4000/api/v1/user/signin";

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    async function submitHandler(event) {
        event.preventDefault();
        try {
            // Input validation
            if (!username || !password || password.length < 6) {
                toast.error('Wrong Credentials! Try Again.');
                return;
            }

            const response = await axios.post(URL, {
                username: username,
                password: password,
            });

            if (response.data.success) {
                localStorage.setItem('isLoggedIn', true);
                localStorage.setItem('token', response.data.token);

                toast.success('Login Successfully!');
                navigate("/dashboard");
            } else {
                toast.error('Wrong Credentials! Try Again.');
            }
        } catch (error) {
            console.error('Error occurred during sign in:', error.response.data);
            toast.error(error.response.data.message);
        }
    }

    return (
        <div className='bg-slate-400 h-screen w-full flex justify-center items-center'>
            <div className='flex justify-center w-full'>
                <div className="rounded-lg bg-white w-96 text-center p-2 h-max px-4 ">
                    <Heading label={"Sign In"} />
                    <SubHeading label={"Enter Credentials to access your account"} />

                    <form onSubmit={submitHandler}>
                        <InputBox label={"Email"} placeholder={"pantharshit007@gmail.com"}
                            onChange={(e) => setUsername(e.target.value)} />
                        <InputBox label={"Password"} placeholder={"123456"}
                            onChange={(e) => setPassword(e.target.value)} />
                        <div className='pt-4'>
                            <Button label={"Sign In"} type={'submit'} />
                        </div>
                    </form>

                    <Warning label={"Don't have an Account?"} btnText={"Sign Up"} destination={"/Signup"} />
                </div>
            </div>
        </div>
    )
}

export default Signin