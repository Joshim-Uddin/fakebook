import Link from "next/link";


const Login = () => {
    return (
        <div className="md:w-1/3 w-full bg-white shadow-md rounded-md flex flex-col md:gap-4 gap-2 py-16 px-8 md:text-xl text-lg">
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
        <button className="bg-green-600 text-white p-2 rounded-md w-full"><Link href='/signup'>Create Account</Link></button>
        </div>
        </div>
    );
};

export default Login;