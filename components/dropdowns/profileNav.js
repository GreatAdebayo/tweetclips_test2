import React, { useContext } from 'react'
import { motion } from "framer-motion"; //check note.txt for notes on framer motion

import Link from 'next/link';
import UiContext from '../../context/UI/context';
import AuthContext from '../../context/auth/context';






const ProfileNav = () => {


    let { isDark, showItem } = useContext(UiContext)
    let { userSignOut, user } = useContext(AuthContext)


    return (
        <>

            <div className={isDark === "dark" ? "dark" : ""}>
                <motion.div
                    animate={{ y: [-50, 2, 30, 2], scale: 1 }}
                    initial={{ scale: 0 }}
                    transition={{ type: "twin", ease: "easeInOut" }}
                >
                    <div className='absolute mt-4 right-0 w-80  p-8 rounded-lg dark:border-0 border-2 border-slate-300 dark:bg-slate-800 bg-white'>
                        <div className=''>
                            <div className='px-4 pb-4'>
                                <div className='text-center'>
                                    <p className='text-lg font-bold text-gray-800 dark:text-gray-200 '>{ user.displayName !== null ? user.displayName : ""}</p>
                                    <p className='text-sm text-gray-800 dark:text-gray-200 '>{user.email}</p>
                                </div>
                            </div>
                            <hr className='dark:opacity-10' />
                        </div>

                        <Link href="/profile" onClick={() => showItem('profile')}>
                            <div className='px-6 py-3 cursor-pointer hover:bg-blue-50 hover:dark:bg-gray-700'>
                                <div className='flex gap-5 items-center'>
                                    <div className='dark:text-slate-400'>
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 lg:w-6 lg:h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                                        </svg>
                                    </div>

                                    <div className='text-gray-600 dark:text-gray-300 flex-1 text-sm space-y-1'>
                                        <p className='lg:text-base font-medium'> My Profile</p>
                                    </div>
                                </div>
                            </div>
                            <hr className='dark:opacity-10' />
                        </Link>



                        <div>
                            <div className='px-6 py-3 cursor-pointer hover:bg-blue-50 hover:dark:bg-gray-700'>
                                <div className='flex gap-5 items-center'>
                                    <div className='dark:text-slate-400'>
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 lg:w-6 lg:h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                        </svg>
                                    </div>

                                    <div className='text-gray-600 dark:text-gray-300 flex-1 text-sm space-y-1'>
                                        <p className='lg:text-base font-medium'>Need Help?</p>
                                    </div>
                                </div>
                            </div>
                            <hr className='dark:opacity-10' />
                        </div>


                        <div onClick={userSignOut} className='px-6 py-3 cursor-pointer hover:bg-blue-50 hover:dark:bg-gray-700'>
                            <div className='flex gap-5 items-center'>
                                <div className='dark:text-slate-400'>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 lg:w-6 lg:h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                                    </svg>
                                </div>

                                <div className='text-gray-600 dark:text-gray-300 flex-1 text-sm space-y-1'>
                                    <button  className='lg:text-base font-medium'>Sign Out</button>
                                </div>
                            </div>
                        </div>
                        <hr className='dark:opacity-10' />

                    </div>
                </motion.div>
            </div>



        </>
    )
};

export default ProfileNav;