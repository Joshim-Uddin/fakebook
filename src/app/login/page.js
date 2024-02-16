'use client'
import Modal from '@/components/signUpModal';
import Link from 'next/link';
import React, { useState } from 'react';

const Login = () => {
    const [showModal, setShowModal] = useState(false)
    return (
        <div className="relative text-center flex md:px-32 h-screen justify-center items-center gap-14 bg-slate-300">
        <div className="flex flex-col items-center justify-center w-1/2">
        <h1 className="text-5xl font-bold text-blue-600 mb-2">Fakebook</h1>
        <p className="text-xl">Fakebook help you to be connected with people and share your outlook</p>
        </div>
       <div>
        <div className={`${showModal?'w-full bg-white shadow-md rounded-md flex flex-col md:gap-4 gap-2 py-16 px-8 md:text-xl text-lg':'w-full bg-white shadow-md rounded-md flex flex-col md:gap-4 gap-2 py-16 px-8 md:text-xl text-lg'} `}>
            <form className="flex flex-col gap-4">
           <div>
           <input className="w-full border border-black outline-none rounded-md py-2 ps-3" type="email" name="email" id="email" placeholder="Email or Phone Number" />
            </div>
            <div>
                <input className="w-full border border-black outline-none rounded-md py-2 ps-3" type="password" name="password" id="password" placeholder="Password" />
            </div>
            <div><button className="bg-blue-600 text-white p-2 rounded-md w-full">Log In</button></div>
        </form>
        <div>
        <Link href='/'>Forgot Password?</Link>
        </div>
        <div>
        <button onClick={()=>setShowModal(true)} className="bg-[#14A800] text-white p-2 rounded-md w-full">Create Account</button>
        </div>
        </div>
        
        <Modal showModal={showModal} setShowModal={setShowModal}/>
        
       </div>
       <div className={`${showModal?'h-screen absolute w-screen bg-gray-600 opacity-50 top-0 left-0 ':''}`}></div>
       </div>
    );
};

export default Login;