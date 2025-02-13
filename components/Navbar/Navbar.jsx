import React from 'react'
import logo from "../../assets/logo.png"
import { FaCaretDown } from "react-icons/fa";
import { FaCartShopping } from 'react-icons/fa6';
import DarkMode from './DarkMode';

const Menu = [
    {
        id: 1,
        name: "Home",
        link: "/#"
    },
    {
        id: 2,
        name: "Best Seller",
        link: "/#services"
    }
]

const DropdownLinks = [
    {
        name: "Top Sellers",
        link: "/#",
    },
    {
        name: "New Arrivals",
        link: "/#"
    },
    {
        name: "Trending Now",
        link: "/#"
    }
]

const Navbar = () => {
    return (
        <>
            <div className='w-full bg-white dark:bg-black'>
                <div className='container py-3 md:py-0 '>
                    <div className='flex justify-between items-center '>
                        {/* logo section  */}
                        <div>
                            <a href="#" className='flex items-center text-2xl sm:text-3xl'>
                                <img src={logo} alt="logo" className='w-10' />
                                <span className='font-bold'>Watch </span>Store
                            </a>
                        </div>
                        {/* menu section  */}
                        <div className='flex justify-between items-center gap-2'>
                            <div>
                                <DarkMode />
                            </div>
                            <ul className='flex gap-4 items-center'>
                                {Menu.map((Menu) => (
                                    <li key={Menu.id}>
                                        <a href={Menu.link} className='inline-block py-4 px-4 hover:text-primary'>{Menu.name}</a>
                                    </li>
                                ))}
                                {/* simple dropdown menu   */}
                                <li className='group relative cursor-pointer'>
                                    <a href="#" className='flex h-[72px] items-center gap-[2px]'>
                                        Quick Links
                                        <span>
                                            <FaCaretDown className='transition-all duration-200 group-hover:rotate-180' />
                                        </span>
                                    </a>
                                    {/* Dropdown menu  */}
                                    <div className='absolute -left-9 z[9999] hidden w-[150px] group-hover:block bg-white p-2 shadow-md rounded-md'>
                                        <ul className='space-y-3'>
                                            {DropdownLinks.map((link) => (
                                                <li key={link.link}
                                                    className='inline-blockrounded-md p-2 hover:bg-primary/20 w-full dark:text-black'>
                                                    {link.name}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </li>
                            </ul>
                            {/* Cart section */}
                            <button onClick={() => alert("Cart is Empty")}
                                className='hover:bg-gradient-to-r 
                                hover:from-primary hover:to-secondary hover:scale-105 duration-200 py-1 px-4 rounded-full'
                            >
                                <FaCartShopping className='text-xl text-black dark:text-white drop-shadow-sm cursor-pointer' />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Navbar