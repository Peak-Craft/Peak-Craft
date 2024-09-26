"use client"
import { useState } from "react";
import Image from "next/image";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
      <nav className="bg-opacity-10 bg-black px-7 py-4 md:px-28 md:py-6 backdrop-blur-3xl fixed w-full z-40">
        <div className="flex justify-between items-center">

          <a href="/"><Image alt='' className='h-[30px] md:h-12 w-auto' src={require('../assets/images/logo.png')}/></a>
  
         {/* Menu button for small screens */}
          <div className={`${isOpen ? 'hidden' : ''} md:hidden`}>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-textColorDark focus:outline-none"
            >
                <Image alt='' className='size-6' src={require('../assets/icons/Menu.png')}/>
            </button>
          </div>
  
        
        {/* navigation links */}
          <div
            className={`${
              isOpen ? "block" : "hidden "
            } md:flex space-x-10 items-center font-secondary text-sm transition-all duration-300 relative`}
          >

              <ul className={`${isOpen ? 'absolute -top-8 right-1 w-52 py-4 text-xl font-alata mt-4 pl-10 pr-5 bg-accentNavy  pb-12': ' items-center'}  flex rounded-md  flex-col md:flex-row space-y-5  md:space-y-0 md:space-x-10`}>
            <button onClick={() => {setIsOpen(!isOpen)} }>
                <Image  alt='' className={`${!isOpen ? 'hidden': ''} size-7 float-end`} src={require('../assets/icons/Close.png')}/>
            </button>
              <li><a href="#">About Us</a></li>
              <li><a href="#">Events</a></li>
              <li><a href="#">Projects</a></li>
              <li><a href="#">Domains</a></li>
              <li className="md:px-10 md:py-2 md:border-white md:border-[1px] md:rounded cursor-pointer"><a href="#">Join Us</a></li>
            </ul>
          </div>
        </div>
      </nav>
    )
}

export default Navbar;