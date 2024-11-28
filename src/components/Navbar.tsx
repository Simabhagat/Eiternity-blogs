import { useState } from "react";
import Logo from './../assets/Logo.jpg';

const Navbar = () => {
  const [isActive, setActive] = useState('/home');

  return (
    <div className='flex flex-row justify-between items-center list-none  px-2 py-2'>

        <div className='flex flex-row justify-center align-middle'>
            <img src={Logo} alt='Logo' className='h-10 w-10' />
            <h1 className='text-3xl'>Ei~ternity</h1>
        </div>

        <div className='flex flex-row justify-center align-middle list-none gap-4 shadow-md rounded-md px-4'>
            <li>
                <a href="#" onClick={() => setActive('/home')}>
                    <p className={`text-2xl ${isActive === '/home'? 'text-red-700 underline': ''}`}>Home</p>
                </a>
            </li>
            <li>
                <a href="#"  onClick={() => setActive('/blogs')}>
                    <p className={`text-2xl ${isActive === '/blogs'? 'text-red-700 underline': ''}`}>Blogs</p>
                </a>
            </li>
            <li>
                <a href="#"  onClick={() => setActive('/about')}>
                    <p className={`text-2xl ${isActive === '/about'? 'text-red-700 underline': ''}`}>About</p>
                </a>
            </li>
        </div>

        <div>
            <button className='bg-green-600 rounded-lg px-2 py-2 transition ease-in-out delay-150 hover:scale-105 hover:opacity-90'>
                <p className='text-white hover:underline text-xl'>
                    Github
                </p>
            </button>
        </div>
        </div>
  )
}

export default Navbar
