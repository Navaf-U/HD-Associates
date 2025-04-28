'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { BiMenu } from 'react-icons/bi'

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false)

    const toggleMenu = () => {
        setIsOpen(!isOpen)
    }

    const closeMenu = () => {
        setIsOpen(false)
    }

    return (
        <nav className="fixed flex h-24 items-center top-0 left-0 w-full bg-white text-[#000000c5] shadow-md z-50">
            <div className='md:flex md:justify-between w-full '>
            <Link href={'/'}>
                <Image width={100} height={100} src={'/assets/logo.png'} className="text-xl font-bold w-10 h-10 md:w-18 md:h-18 ms-10" alt="logo" />
            </Link>
            <div className=" flex items-center justify-center md:w-full">
                <div className="hidden md:flex gap-6">
                    <Link href="/" className="hover:text-blue-500">Home</Link>
                    <Link href="/about" className="hover:text-blue-500">About Us</Link>
                    <Link href="/commitment" className="hover:text-blue-500">Our Commitment</Link>
                    <Link href="/team-members" className="hover:text-blue-500">Team Members</Link>
                    <Link href="/service" className="hover:text-blue-500">Our Services</Link>
                    <Link href="/client" className="hover:text-blue-500">Our Clients</Link>
                </div>
            </div>
            </div>

            <div className='md:hidden'>
                <button
                    onClick={toggleMenu}
                    className="md:hidden flex items-center p-2 focus:outline-none"
                    aria-label="Toggle navigation menu"
                >
                    <BiMenu size={30} />
                </button>
            </div>
            <div className={`md:hidden ${isOpen ? 'block' : 'hidden'} absolute top-24 left-0 w-full bg-white shadow-md py-4`}>
                <div className="flex flex-col items-center">
                    <Link href="/" className="py-2 hover:text-blue-500" onClick={closeMenu}>Home</Link>
                    <Link href="/about" className="py-2 hover:text-blue-500" onClick={closeMenu}>About Us</Link>
                    <Link href="/commitment" className="py-2 hover:text-blue-500" onClick={closeMenu}>Our Commitment</Link>
                    <Link href="/team-members" className="py-2 hover:text-blue-500" onClick={closeMenu}>Team Members</Link>
                    <Link href="/service" className="py-2 hover:text-blue-500" onClick={closeMenu}>Our Services</Link>
                    <Link href="/client" className="py-2 hover:text-blue-500" onClick={closeMenu}>Our Clients</Link>
                </div>
            </div>
        </nav>
    )
}
