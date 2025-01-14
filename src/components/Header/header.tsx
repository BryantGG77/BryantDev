"use client";

import Image from 'next/image'
import Link from 'next/link'
import { RiMenu3Line } from 'react-icons/ri';
import { dataHeader } from './header.data';
import { useState } from 'react';
import { MotionTransition } from '../MotionTransition/MotionTransition';
import { Reveal } from '../Reveal';
export function Header() {

    const [OpenMobileMenu, setOpenMobileMenu] = useState(false);

    return (
        <MotionTransition>

            <nav className='flex flex-wrap items-center justify-between max-w-5xl py-8 px-4 mx-auto lg:px-0'>
                <Link href="/">
                    <Image src="/assets/logo.png" alt='Logo BryantDev' width={150} height={40} />
                </Link>

                <RiMenu3Line className='block text-3xl cursor-pointer md:hidden text-white' onClick={() => setOpenMobileMenu(!OpenMobileMenu)} />
                <div className={`${OpenMobileMenu ? 'block' : 'hidden'} w-full md:block md:w-auto`}>
                    <div className='flex flex-col mt-4 p-4 md:flex-row md:space-x-6 md:p-0 md:mt-0 md: border-0'>
                        {dataHeader.map(({ id, name, idLink }) => (
                            <Reveal key={id}>
                                <div className='p-2 trasition-all duration-500 ease-in-out'>
                                    <Link href={idLink} className='text-lg hover:text-primary'>{name}</Link>
                                </div>
                            </Reveal>
                        ))}
                    </div>
                </div>
            </nav>

        </MotionTransition>
    )
}

export default Header;