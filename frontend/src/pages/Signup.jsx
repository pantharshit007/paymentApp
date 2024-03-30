import React from 'react'
import Heading from '../components/Heading'
import SubHeading from '../components/SubHeading'
import InputBox from '../components/InputBox'
import Button from '../components/Button'
import Warning from '../components/Warning'

function Signup() {
    return (
        <div className='bg-slate-400 h-screen w-full flex justify-center items-center'>
            <div className='flex justify-center w-full'>
                <div className="rounded-lg bg-white w-96 text-center p-2 h-max px-4 ">
                    <Heading label={"Sign up"} />
                    <SubHeading label={"Enter Info to Create Account"} />
                    <InputBox label={"First Name"} placeholder={"Harshit"} />
                    <InputBox label={"Last Name"} placeholder={"Pant"} />
                    <InputBox label={"Email"} placeholder={"pantharshit007@gmail.com"} />
                    <InputBox label={"Password"} placeholder={"123456"} />
                    <Button label={"Sign Up"} onClick={"onClick"} />
                    <Warning label={"Already have an Account?"} btnText={"Sign In"} destination={"/Signin"} />
                </div>
            </div>
        </div>
    )
}

export default Signup