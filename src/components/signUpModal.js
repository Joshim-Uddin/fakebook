'use client'
import Link from 'next/link';
import React from 'react';
import { useForm } from 'react-hook-form';
import Swal from 'sweetalert2';

const Modal = ({showModal, setShowModal}) => {
   
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
      } = useForm()
    const handleSignUp=(data)=>{
        const fullName = `${data.firstName} ${data.lastName}`;
        const dob = `${data.date} ${data.month} ${data.year}`;
        const password = data.password;
        const mobileEmail = data.mobileEmail;
        const gender = data.gender;
        const userData = {fullName:fullName, password:password, mobileEmail:mobileEmail, gender:gender, dob:dob};
        console.log(userData)
        fetch('http://localhost:5000/signup', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(userData),
        }).then(res=>res.json()).then(data=>{
            if(data.failed){
                Swal.fire({
                    icon: "error",
                    title: "Oops...",
                    text: "User Already Exists",
                    showConfirmButton: false,
                    timer: 1500
                  })
            }else{
                Swal.fire({
                    icon: "success",
                    title: "Account Created Successfully",
                    showConfirmButton: false,
                    timer: 1500
                })
            }
        });
         reset()
        setShowModal(false)
    }
    const days = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18','19', '20', '21', '22', '23', '24', '25', '26','27', '28', '29', '30', '31']
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
    const years = []
for(let m=2024; m>=1905; m--){
    years.push(m)
}


    return (
                <div className={`${!showModal?'hidden':'w-[30%] mx-auto rounded-md absolute z-20 bg-slate-200 shadow-md left-0 right-0 top-[15%] opacity-100 p-3 '}`}>
            <button className='absolute right-3 top-2 text-2xl' onClick={()=>setShowModal(false)}>x</button>
            <div className='p-3'>
            <div>
            <h2 className='text-3xl font-bold text-left'>
            Sign UP
            </h2>
            <p className='text-left'>This is fast and easy</p>
            </div>
            <hr className='text-red-600'/>
            <form className='mt-2' onSubmit={handleSubmit(handleSignUp)}>
                <div className='w-full flex gap-2 mb-2'>
                <div className='max-w-[1/2]'>
                <input className='w-[99%] p-2 rounded-md border border-gray-400 focus:outline-none' type='text' placeholder='First Name' name='fname' {...register('firstName', {required:true})}></input>
                </div>
                <div className='max-w-[1/2]'>
                <input className='w-[99%] p-2 rounded-md border border-gray-400 focus:outline-none' type='text' placeholder='Last Name' name='lname' {...register('lastName', {required:true})}></input>
                </div>
                </div>
                <div className='w-full flex flex-col justify-center mb-2'>
                <input className='p-2 rounded-md focus:outline-none border border-gray-400' type='text' placeholder='Mobile Number or Email Address' name='mobileEmail' {...register('mobileEmail', {required:true})}></input>
                </div>
                <div className='w-full flex flex-col justify-center mb-2'>
                    <input className='p-2 rounded-md focus:outline-none border border-gray-400' type='password' placeholder='New Password' name='password' {...register('password', {required:true})}/>
                </div>
                <div className='flex flex-col justify-start items-start '>
                    <label htmlFor='dob' className='text-left'>Date of Birth</label>
                    <div className='w-full grid grid-cols-3 gap-3'>
                    <select className='px-3 py-2 rounded-md border border-gray-400'  name='date' defaultValue={new Date().getDate()} {...register('date', {required:true})}>
                        {days.map((day, index) => <option value={day} key={index}>{day}</option>)}
                    </select>
                    <select name='month' className='px-3 py-2 rounded-md border border-gray-400' defaultValue={months[new Date().getMonth()]} {...register('month', {required:true})}>
                        {months.map((month, index) => <option value={month} key={index}>{month}</option>)}
                    </select>
                    <select name='year' className='px-3 py-2 rounded-md border border-gray-400' defaultValue={new Date().getFullYear()} {...register('year', {required:true})}>
                        {years.map((year, index) => <option value={year} key={index}>{year}</option>)}
                    </select>
                    </div>
                </div>
                <div className='flex flex-col justify-start items-start mt-2'>
                    <label htmlFor='gender'>
                    Gender</label>
                    <div className='flex gap-3'>
                    <div id='female' className='flex items-center justify-center gap-2 p-2 border border-gray-300 rounded-md'>
                    <label htmlFor="female">Female</label>
                    <input className='pr-2' type='radio' name='gender' value='female' {...register('gender', {required:true})}/>
                    </div>
                    <div id='male' className='flex items-center justify-center gap-2 p-2 border border-gray-300 rounded-md'>
                    <label htmlFor="male">Male</label>
                    <input className='pr-2' type='radio' name='gender' value='male' {...register('gender', {required:true})}/>
                    </div>
                    <div id='custom' className='flex items-center justify-center gap-2 p-2 border border-gray-300 rounded-md'>
                    <label htmlFor="custom">Custom</label>
                    <input className='pr-2' type='radio' name='gender' value='custom' {...register('gender', {required:true})}/>
                    </div>
                    </div>
                </div>
                <div>
                <p className='text-left py-2 text-xs'>
                People who use our service may have uploaded your contact information to Facebook. <Link href='' className='text-blue-700'>Learn more</Link>
                </p>
            </div>
            <div>
                <p className='pb-2 text-xs text-left'>
                By clicking Sign Up, you agree to our  <Link href='' className='text-blue-700'>Terms</Link>,  <Link href='' className='text-blue-700'>Privacy Policy</Link> and  <Link href='' className='text-blue-700'>Cookies Policy</Link>. You may receive SMS notifications from us and can opt out at any time.
                </p>
            </div>
            <button className="bg-[#14A800] font-semibold p-2 rounded-md text-xl text-white" type='submit'>Sign Up</button>
            </form>
            
            </div>
        </div>
    );
};

export default Modal;