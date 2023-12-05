import React from 'react';
import Folder from './Folder.jsx';

const Sidenav = () => {
    return (
        <>
            <div className='h-screen overflow-hidden'>
                <div className='w-full grid gap-1 grid-cols-2 p-2 border-b-2 border-b-gray-400 bg-slate-200'>
                    <div
                        className='relative flex p-2 gap-2 justify-center items-center rounded-lg cursor-pointer transition duration-300 after:content-[""] after:absolute after:w-[0%] after:h-[0.25rem] after:left-0 after:bg-rose-500 after:-bottom-2 after:duration-300 hover:after:w-[100%]'>
                        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='currentColor'
                             className='w-5 h-5'>
                            <path fillRule='evenodd'
                                  d='M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zM12.75 9a.75.75 0 00-1.5 0v2.25H9a.75.75 0 000 1.5h2.25V15a.75.75 0 001.5 0v-2.25H15a.75.75 0 000-1.5h-2.25V9z'
                                  clipRule='evenodd'/>
                        </svg>
                        <p className='block'>New Folder</p>
                    </div>
                    <div
                        className='relative flex p-2 gap-2 justify-center items-center rounded-lg cursor-pointer transition duration-300 after:content-[""] after:absolute after:w-[0%] after:h-[0.25rem] after:left-0 after:bg-rose-500 after:-bottom-2 after:duration-300 hover:after:w-[100%]'>
                        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='currentColor'
                             className='w-5 h-5'>
                            <path
                                d='M21.731 2.269a2.625 2.625 0 00-3.712 0l-1.157 1.157 3.712 3.712 1.157-1.157a2.625 2.625 0 000-3.712zM19.513 8.199l-3.712-3.712-8.4 8.4a5.25 5.25 0 00-1.32 2.214l-.8 2.685a.75.75 0 00.933.933l2.685-.8a5.25 5.25 0 002.214-1.32l8.4-8.4z'/>
                            <path
                                d='M5.25 5.25a3 3 0 00-3 3v10.5a3 3 0 003 3h10.5a3 3 0 003-3V13.5a.75.75 0 00-1.5 0v5.25a1.5 1.5 0 01-1.5 1.5H5.25a1.5 1.5 0 01-1.5-1.5V8.25a1.5 1.5 0 011.5-1.5h5.25a.75.75 0 000-1.5H5.25z'/>
                        </svg>

                        <p className='block'>New Note</p>
                    </div>
                </div>

                <div className='h-screen bg-slate-100'>

                    <div className='grid grid-cols-1 w-full'>

                        <Folder/>

                        <Folder/>

                        <Folder/>

                    </div>

                </div>
            </div>
        </>
    );
};

export default Sidenav;