import React, { useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Image from "next/image";
import logoimg from "../../src/img/startPro.png";
const NavBar: React.FC = () => {
    // Navegacion
    return (
        <div className='h-full bg-white p-4 w-20 flex flex-col items-center'>
            <img  className='w-20' />
            <ul className='ist-none mt-2.5 '>
                <li className=' flex  items-center rounded st-hv-cl duration-100 pb-5s w-16'  title='Home' >
                <Image src={logoimg} className='w-full ' alt="Logo" />                     
                </li>
                <li className=' p-2 flex justify-center items-center rounded st-hv-cl duration-100 mb-0.5' title='Home' >
                <i className='bx bx-home-alt text-customGreen text-2xl'>
                </i>
                </li>

                <li className='mt-4 p-2 flex justify-center items-center rounded st-hv-cl duration-100 mb-0.5' title='Monitoreo de transacciones WIP' >
                <i className='bx bx-desktop text-customGreen text-2xl' ></i>
                </li>
                <li className='p-2 flex justify-center items-center rounded st-hv-cl duration-100 mb-0.5' title='' >
                </li>
 
            </ul>
        </div>
    );
};
 
export default NavBar;