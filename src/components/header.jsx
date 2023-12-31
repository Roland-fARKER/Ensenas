import React, { useState } from 'react';
import { Bars3BottomRightIcon, XMarkIcon, HandRaisedIcon } from '@heroicons/react/24/solid'

const Header = () => {
    const Links =[
        {name:"INICIO",link:"/"},
        {name:"SOBRE NOSOTROS",link:"/"},
        {name:"CONTACTANOS",link:"/"},
      ];
      const [open, setOpen] =useState(false);

    return (
        <div className='shadow-md w-full top-0 left-0 sticky'>
           <div className='md:flex items-center justify-between bg-blue-400 py-4 md:px-10 px-7'>
           
            <div className='font-bold text-2xl cursor-pointer flex items-center gap-1'>
                <HandRaisedIcon className='w-7 h-7 text-white'/>
                <span className=" text-gray-800" >Enseñas</span>
            </div>
          
            <div onClick={()=>setOpen(!open)} className='absolute right-8 top-6 cursor-pointer md:hidden w-7 h-7'>
                {
                    open ? <XMarkIcon/> : <Bars3BottomRightIcon />
                }
            </div>
           
            <ul className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-blue-400 md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${open ? 'top-12' : 'top-[-490px]'}`}>
                {
                    Links.map((link) => (
                    <li className='md:ml-8 md:my-0 my-7 font-semibold'>
                        <a href={link.link} className=' text-gray-800 hover:bg-gray-200 duration-500 p-3 rounded-3xl'>{link.name}</a>
                    </li>))
                }
            
            </ul>
           
           </div>
        </div>
    );
};

export default Header;