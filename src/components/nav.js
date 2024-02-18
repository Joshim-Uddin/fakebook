import logo from "@/assets/img/logo.png";
import Image from 'next/image';
import Link from 'next/link';
import { RiHome4Fill } from "react-icons/ri";
import { MdOutlineOndemandVideo, MdNotifications } from "react-icons/md";
import { FaStore, FaGamepad, FaFacebookMessenger} from "react-icons/fa6";
import { HiUserGroup } from "react-icons/hi2";
import { PiDotsNineBold } from "react-icons/pi";

const Navbar =()=>{
    return (
        <nav>
            <div id='fakebook' className='flex justify-center items-center'>
            <div className='w-10 h-10'>
                <Link href='/home'><Image src={logo} alt='fakebook logo' width={200} height={200}></Image></Link>
            </div>
            <div>
                <input type='text' placeholder='Search' className='p-2 border rounded-3xl'></input>
            </div>
            </div>
            <div id='menubar'>
            <div>
                <button>
                    <Link href='/'><RiHome4Fill /></Link>
                </button>
            </div>
            <div>
            <button>
                    <Link href='/'><MdOutlineOndemandVideo /></Link>
                </button>
            </div>
            <div>
            <button>
                    <Link href='/'><FaStore /></Link>
                </button>
            </div>
            <div>
            <button>
                    <Link href='/'><HiUserGroup /></Link>
                </button>
            </div>
            <div>
            <button>
                    <Link href='/'><FaGamepad /></Link>
                </button>
            </div>
            
            </div>
            <div id='profile'>
            <div>
            <button>
                    <Link href='/'><PiDotsNineBold /></Link>
                </button>
            </div>
            <div>
            <button>
                    <Link href='/'><FaFacebookMessenger /></Link>
                </button>
            </div>
            <div>
            <button>
                    <Link href='/'><MdNotifications /></Link>
                </button>
            </div>
            <div>

            </div>
            </div>

        </nav>
    )
};
export default Navbar;