"use client"
import React from 'react'
import { motion } from 'framer-motion'
import { SocialIcon } from 'react-social-icons'
type Props = {}

export default function Header({ }: Props) {
    return (
        <header className='sticky top-0 p-5 flex items-start justify-between max-w-7xl mx-auto z-20 xl:items-center'>
            <motion.div
                initial={{
                    x: -1000,
                }}
                animate={{
                    x: 0
                }}
                className='flex flex-row items-center'>
                {/* Social Icons */}
                <SocialIcon url="https://twitter.com/the_naveen_s"
                    fgColor='grey'
                    bgColor='transparent'
                />
                <SocialIcon url="https://www.linkedin.com/in/thenaveens/"
                    fgColor='grey'
                    bgColor='transparent'
                />
            </motion.div>
            <motion.div
                initial={{
                    x: 1000,
                }}
                animate={{
                    x: 0
                }}
                className='flex flex-row items-center text-gray-300 cursor-pointer'>
                <SocialIcon
                    className='cursor-pointer'
                    network='email'
                    fgColor='grey'
                    bgColor='transparent'
                />
                <p className='uppercase hidden md:inline-flex text-sm text-gray-400'>
                    Get In Touch
                </p>
            </motion.div>
        </header>
    )
}