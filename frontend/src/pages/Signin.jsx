import React from 'react'
import Heading from '../components/Heading'
import SubHeading from '../components/SubHeading'
import InputBox from '../components/InputBox'
import Button from '../components/Button'
import Warning from '../components/Warning'
import { useNavigate } from 'react-router-dom'

function Signin() {
    const navigate = useNavigate();
    const URL = "http://localhost:4000/signin";

    return (
        <div className='bg-slate-400 h-screen w-full flex justify-center items-center'>
            <div className='flex justify-center w-full'>
                <div className="rounded-lg bg-white w-96 text-center p-2 h-max px-4 ">
                    <Heading label={"Sign In"} />
                    <SubHeading label={"Enter Credentials to access your account"} />
                    <InputBox label={"Email"} placeholder={"pantharshit007@gmail.com"} />
                    <InputBox label={"Password"} placeholder={"123456"} />
                    <div className='pt-4'>
                        <Button label={"Sign In"} onClick={() => navigate("/dashboard")} />
                    </div>
                    <Warning label={"Don't have an Account?"} btnText={"Sign Up"} destination={"/Signup"} />
                </div>
            </div>
        </div>
    )
}

export default Signin