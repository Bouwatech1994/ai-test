import React from 'react'
import MaxWidthWrapper from './MaxWidtWrapper'
import Link from 'next/link'
import { buttonVariants } from './ui/button'
import {LoginLink, RegisterLink} from "@kinde-oss/kinde-auth-nextjs/server"

const NavBar = () => {
  return (
    <nav className='sticky h-14 inset-x-0 w-full border-b top-0 z-30 bg-white/75 border-gray-200 backdrop-blur-lg transition-all'>
        <MaxWidthWrapper className=''>
            <div className="flex h-14 items-center justify-between border-b border-zinc-200">
                <Link href="/" className='flex z-40 font-semibold'>
                    <span>BSoft</span>
                </Link>
            </div>
            <div className="hidden items-center space-x-4 sm:flex">
                <>
                    <Link href="/" 
                    className={buttonVariants({
                        variant:"ghost",
                        size:'sm'
                    })}>
                        Price
                    </Link>
                    <LoginLink 
                    className={buttonVariants({
                        variant:"ghost",
                        size:'sm'
                    })}>
                        Log in
                    </LoginLink>
                    <RegisterLink 
                    className={buttonVariants({
                        variant:"ghost",
                        size:'sm'
                    })}>
                        Register
                    </RegisterLink>
                </>

            </div>
        
        </MaxWidthWrapper>
    </nav>
  )
}

export default NavBar