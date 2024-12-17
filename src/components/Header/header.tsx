"use client";

import Image from 'next/image'
import Link from 'next/link'
import { RiMenu3Line } from 'react-icons/ri';
import { dataHeader } from './header.data';
import { useState } from 'react';
export function Header() {

    const [OpenMobileMenu, setOpenMobileMenu] = useState(false);

    return (
        <header>

            <nav className='flex flex-wrap items-center justify-between max-w-5xl p-8 mx-auto'>
                <Link href="/">
                    <Image src="/assets/logo.png" alt='Logo BryantDev' width={150} height={40} />
                </Link>

                <RiMenu3Line className='block text-3xl cursor-pointer md:hidden text-white' onClick={() => setOpenMobileMenu(!OpenMobileMenu)} />
                <div className={`${OpenMobileMenu ? 'block' : 'hidden'} w-full md:block md:w-auto`}>
                    <div className='flex flex-col mt-4 p-4 md:flex-row md:space-x-6 md:p-0 md:mt-0 md: border-0'>
                        {dataHeader.map(({ id, name, idLink }) => (
                            <div key={id} className='px-2 trasition-all duration-500 ease-in-out'>
                                <Link href={idLink} className='text-lg hover:text-secondary'>{name}</Link>
                            </div>
                        ))}
                    </div>
                </div>
            </nav>

        </header>
    )
}

export default Header;