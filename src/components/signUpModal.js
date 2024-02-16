import Link from 'next/link';
import React from 'react';

const Modal = ({showModal, setShowModal}) => {
    
    const handleSignUp=()=>{
        alert('Sign Up')
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
            <form className='mt-2'>
                <div className='w-full flex gap-2 mb-2'>
                <div className='max-w-[1/2]'>
                <input className='w-[99%] p-2 rounded-md border border-gray-400 focus:outline-none' type='text' placeholder='First Name' name='fname'></input>
                </div>
                <div className='max-w-[1/2]'>
                <input className='w-[99%] p-2 rounded-md border border-gray-400 focus:outline-none' type='text' placeholder='Last Name' name='lname'></input>
                </div>
                </div>
                <div className='w-full flex flex-col justify-center mb-2'>
                <input className='p-2 rounded-md focus:outline-none border border-gray-400' type='text' placeholder='Mobile Number or Email Address' name='mobileemail'></input>
                </div>
                <div className='w-full flex flex-col justify-center mb-2'>
                    <input className='p-2 rounded-md focus:outline-none border border-gray-400' type='password' placeholder='New Password' name='password' />
                </div>
                <div className='flex flex-col justify-start items-start '>
                    <label htmlFor='dob' className='text-left'>Date of Birth</label>
                    <div className='w-full grid grid-cols-3 gap-3'>
                    <select className='px-3 py-2 rounded-md border border-gray-400'  name='dob' defaultValue={new Date().getDate()}>
                        {days.map((day, index) => <option value={day} key={index}>{day}</option>)}
                    </select>
                    <select className='px-3 py-2 rounded-md border border-gray-400' defaultValue={months[new Date().getMonth()]}>
                        {months.map((month, index) => <option value={month} key={index}>{month}</option>)}
                    </select>
                    <select className='px-3 py-2 rounded-md border border-gray-400' defaultValue={new Date().getFullYear()}>
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
                    <input className='pr-2' type='radio' name='gender' value='female'/>
                    </div>
                    <div id='male' className='flex items-center justify-center gap-2 p-2 border border-gray-300 rounded-md'>
                    <label htmlFor="male">Male</label>
                    <input className='pr-2' type='radio' name='gender' value='male'/>
                    </div>
                    <div id='custom' className='flex items-center justify-center gap-2 p-2 border border-gray-300 rounded-md'>
                    <label htmlFor="custom">Custom</label>
                    <input className='pr-2' type='radio' name='gender' value='custom'/>
                    </div>
                    </div>
                </div>
            </form>
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
            <button className="bg-[#14A800] font-semibold p-2 rounded-md text-xl text-white" onClick={()=>handleSignUp()}>Sign Up</button>
            </div>
        </div>
    );
};

export default Modal;