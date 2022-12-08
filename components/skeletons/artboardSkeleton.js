import React from 'react';



export const ArtboardSkeleton = () => {
    return (
        <>


            <div role="status" className="p-4 rounded border bg-white border-gray-200 shadow animate-pulse md:p-6 dark:border-gray-700 space-y-6">

                <div className="flex items-center space-x-3">
                    <svg className="w-14 h-14 text-gray-200 dark:text-gray-700" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z" clip-rule="evenodd"></path></svg>
                    <div>
                        <div className="h-3 bg-gray-200 rounded-full dark:bg-gray-700 w-32 mb-3"></div>
                        <div className="w-48 h-2 bg-gray-200 rounded-full dark:bg-gray-700"></div>
                    </div>
                </div>

                <div>
                    <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-4"></div>
                    <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
                    <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
                    <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700"></div>
                </div>

                <div>
                    <div className="h-7 bg-gray-200 rounded dark:bg-gray-700"></div>
                </div>

            </div>


        </>
    )
}