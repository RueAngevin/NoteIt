import React from 'react';
import Folder from './Folder.jsx';

const Sidenav = () => {
    return (
        <>
            <div className='h-screen overflow-hidden relative'>
                <div className='w-full grid gap-1 grid-cols-2 p-2 border-b-2 border-b-gray-400 bg-slate-200'>
                    <div
                        className='relative flex p-2 gap-2 justify-center items-center rounded-lg cursor-pointer transition duration-300 after:content-[""] after:absolute after:w-[0%] after:h-[0.25rem] after:left-0 after:bg-rose-500 after:-bottom-2 after:duration-300 hover:after:w-[100%]'>
                        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='currentColor'
                            className='w-5 h-5'>
                            <path fillRule='evenodd'
                                d='M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zM12.75 9a.75.75 0 00-1.5 0v2.25H9a.75.75 0 000 1.5h2.25V15a.75.75 0 001.5 0v-2.25H15a.75.75 0 000-1.5h-2.25V9z'
                                clipRule='evenodd' />
                        </svg>
                        <p className='block'>New Folder</p>
                    </div>
                    <div
                        className='relative flex p-2 gap-2 justify-center items-center rounded-lg cursor-pointer transition duration-300 after:content-[""] after:absolute after:w-[0%] after:h-[0.25rem] after:left-0 after:bg-rose-500 after:-bottom-2 after:duration-300 hover:after:w-[100%]'>
                        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='currentColor'
                            className='w-5 h-5'>
                            <path
                                d='M21.731 2.269a2.625 2.625 0 00-3.712 0l-1.157 1.157 3.712 3.712 1.157-1.157a2.625 2.625 0 000-3.712zM19.513 8.199l-3.712-3.712-8.4 8.4a5.25 5.25 0 00-1.32 2.214l-.8 2.685a.75.75 0 00.933.933l2.685-.8a5.25 5.25 0 002.214-1.32l8.4-8.4z' />
                            <path
                                d='M5.25 5.25a3 3 0 00-3 3v10.5a3 3 0 003 3h10.5a3 3 0 003-3V13.5a.75.75 0 00-1.5 0v5.25a1.5 1.5 0 01-1.5 1.5H5.25a1.5 1.5 0 01-1.5-1.5V8.25a1.5 1.5 0 011.5-1.5h5.25a.75.75 0 000-1.5H5.25z' />
                        </svg>

                        <p className='block'>New Note</p>
                    </div>
                </div>

                <div className='h-screen bg-slate-100'>

                    <div className='max-h-[80%] overflow-y-scroll grid grid-cols-1 w-full'>

                        <Folder />
                        <Folder />
                        <Folder />
                        <Folder />
                        <Folder />
                        <Folder />
                        <Folder />
                        <Folder />
                        <Folder />
                        <Folder />
                        <Folder />

                    </div>

                    <div
                        className='absolute bottom-0 p-3 w-full bg-slate-200 border-t-2 border-t-gray-400 grid grid-cols-3'>

                        <p className='col-span-2 place-self-center font-bold text-lg text-blue-950 cursor-pointer'>John Doe</p>

                        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='currentColor'
                            className='w-8 h-8 place-self-end cursor-pointer'>
                            <path fillRule='evenodd'
                                d='M18.685 19.097A9.723 9.723 0 0021.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 003.065 7.097A9.716 9.716 0 0012 21.75a9.716 9.716 0 006.685-2.653zm-12.54-1.285A7.486 7.486 0 0112 15a7.486 7.486 0 015.855 2.812A8.224 8.224 0 0112 20.25a8.224 8.224 0 01-5.855-2.438zM15.75 9a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z'
                                clipRule='evenodd' />
                        </svg>

                    </div>

                </div>
            </div>
        </>
    );
};

export default Sidenav;