import Link from "next/link";


const Login = () => {
    return (
        <div className="w-1/2 bg-white shadow-md rounded-md flex flex-col md:gap-4 gap-2 p-5">
            <form>
           <div>
           <input className="border border-blue-200 rounded-md p-2" type="email" name="email" id="email" placeholder="Email or Phone Number" />
            </div>
            <div>
                <input type="password" name="password" id="password" placeholder="Password" />
            </div>
            <div><button className="btn">Log In</button></div>
        </form>
        <div>
        <Link href='/'>Forgot Password?</Link>
        </div>
        <div>
        <button><Link href='/signup'>Create Account</Link></button>
        </div>
        </div>
    );
};

export default Login;