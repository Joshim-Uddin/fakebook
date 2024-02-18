'use client'
import logo from "@/assets/img/logo.png";
import Image from 'next/image';
import Link from 'next/link';
import { RiHome4Fill } from "react-icons/ri";
import { MdOutlineOndemandVideo, MdNotifications, MdSearch } from "react-icons/md";
import { FaStore, FaGamepad, FaFacebookMessenger} from "react-icons/fa6";
import { HiUserGroup } from "react-icons/hi2";
import { PiDotsNineBold } from "react-icons/pi";
import { useContext } from "react";
import { fakebookContext } from "@/app/contextApi";

const Navbar =()=>{
    const {user} = useContext(fakebookContext)
    return (
        <nav className="grid gap-5 grid-cols-4 bg-white border-b shadow-sm min-h-16 fixed top-0 left-0 right-0 px-10">
            <div id='fakebook' className='flex justify-center items-center gap-4 mr-8'>
            <div>
                <Link href='/home'><Image src={logo} alt='fakebook logo' width={200} height={200}></Image></Link>
            </div>
            <div className="relative">
                <input type='text' placeholder='Search' className='p-2 focus:outline-none border rounded-3xl ps-3'>
                </input>
            </div>
            </div>
            <div id='menubar' className="flex gap-5 justify-around items-center col-span-2 mr-10">
            <div>
                <button className="p-2 hover:bg-gray-200 hover:rounded-full">
                    <Link href='/'><RiHome4Fill className="text-2xl text-blue-600"/></Link>
                </button>
            </div>
            <div>
            <button className="p-2 hover:bg-gray-200 hover:rounded-full">
                    <Link href='/'><MdOutlineOndemandVideo className="text-2xl text-blue-600"/></Link>
                </button>
            </div>
            <div>
            <button className="p-2 hover:bg-gray-200 hover:rounded-full">
                    <Link href='/'><FaStore className="text-2xl text-blue-600"/></Link>
                </button>
            </div>
            <div>
            <button className="p-2 hover:bg-gray-200 hover:rounded-full">
                    <Link href='/'><HiUserGroup className="text-2xl text-blue-600"/></Link>
                </button>
            </div>
            <div>
            <button className="p-2 hover:bg-gray-200 hover:rounded-full">
                    <Link href='/'><FaGamepad className="text-2xl text-blue-600"/></Link>
                </button>
            </div>
            
            </div>
            <div id='profile' className="flex gap-5 justify-around items-center">
            <div>
            <button className="p-2 hover:bg-gray-200 hover:rounded-full">
                    <Link href='/'><PiDotsNineBold className="text-2xl text-blue-600"/></Link>
                </button>
            </div>
            <div>
            <button className="p-2 hover:bg-gray-200 hover:rounded-full">
                    <Link href='/'><FaFacebookMessenger className="text-2xl text-blue-600"/></Link>
                </button>
            </div>
            <div>
            <button className="p-2 hover:bg-gray-200 hover:rounded-full">
                    <Link href='/'><MdNotifications className="text-2xl text-blue-600"/></Link>
                </button>
            </div>
            <div>
                <h2>{user}</h2>
            </div>
            </div>

        </nav>
    )
};
export default Navbar;