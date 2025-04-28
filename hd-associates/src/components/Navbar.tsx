'use client'

import Image from 'next/image'
import Link from 'next/link'
export default function Navbar() {
    return (
        <nav className="fixed flex h-24 items-center top-0 left-0 w-full bg-white text-[#000000c5] shadow-md z-50">
            <Link href={'/'}><Image width={100} height={100} src={'/assets/logo.png'} className="text-xl font-bold w-18 h-18 ms-10" alt='logo' /></Link>
            <div className="max-w-7xl mx-auto px-4 py-3 flex justify-center items-center">
                <div className="flex gap-6">
                    <Link href="/" className="hover:text-blue-500">Home</Link>
                    <Link href="/about" className="hover:text-blue-500">About Us</Link>
                    <Link href="/commitment" className="hover:text-blue-500">Our Commitment</Link>
                    <Link href="/team-members" className="hover:text-blue-500">Team Members</Link>
                    <Link href="/service" className="hover:text-blue-500">Our Services</Link>
                    <Link href="/client" className="hover:text-blue-500">Our Clients</Link>
                </div>
            </div>
        </nav>
    )
}
