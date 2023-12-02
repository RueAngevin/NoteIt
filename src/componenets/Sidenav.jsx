import React from 'react';

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

                        <div className='flex justify-between border-b-2 border-gray-300 p-4'>

                            <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='currentColor'
                                 className='w-6 h-6'>
                                <path fillRule='evenodd'
                                      d='M16.28 11.47a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 01-1.06-1.06L14.69 12 7.72 5.03a.75.75 0 011.06-1.06l7.5 7.5z'
                                      clipRule='evenodd'/>
                            </svg>

                            <p>French</p>

                            <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='currentColor'
                                 className='w-6 h-6'>
                                <path fillRule='evenodd'
                                      d='M16.5 4.478v.227a48.816 48.816 0 013.878.512.75.75 0 11-.256 1.478l-.209-.035-1.005 13.07a3 3 0 01-2.991 2.77H8.084a3 3 0 01-2.991-2.77L4.087 6.66l-.209.035a.75.75 0 01-.256-1.478A48.567 48.567 0 017.5 4.705v-.227c0-1.564 1.213-2.9 2.816-2.951a52.662 52.662 0 013.369 0c1.603.051 2.815 1.387 2.815 2.951zm-6.136-1.452a51.196 51.196 0 013.273 0C14.39 3.05 15 3.684 15 4.478v.113a49.488 49.488 0 00-6 0v-.113c0-.794.609-1.428 1.364-1.452zm-.355 5.945a.75.75 0 10-1.5.058l.347 9a.75.75 0 101.499-.058l-.346-9zm5.48.058a.75.75 0 10-1.498-.058l-.347 9a.75.75 0 001.5.058l.345-9z'
                                      clipRule='evenodd'/>
                            </svg>

                        </div>

                        <div className='flex justify-between border-b-2 border-gray-300 p-4'>

                            <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='currentColor'
                                 className='w-6 h-6'>
                                <path fillRule='evenodd'
                                      d='M16.28 11.47a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 01-1.06-1.06L14.69 12 7.72 5.03a.75.75 0 011.06-1.06l7.5 7.5z'
                                      clipRule='evenodd'/>
                            </svg>

                            <p>French</p>

                            <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='currentColor'
                                 className='w-6 h-6'>
                                <path fillRule='evenodd'
                                      d='M16.5 4.478v.227a48.816 48.816 0 013.878.512.75.75 0 11-.256 1.478l-.209-.035-1.005 13.07a3 3 0 01-2.991 2.77H8.084a3 3 0 01-2.991-2.77L4.087 6.66l-.209.035a.75.75 0 01-.256-1.478A48.567 48.567 0 017.5 4.705v-.227c0-1.564 1.213-2.9 2.816-2.951a52.662 52.662 0 013.369 0c1.603.051 2.815 1.387 2.815 2.951zm-6.136-1.452a51.196 51.196 0 013.273 0C14.39 3.05 15 3.684 15 4.478v.113a49.488 49.488 0 00-6 0v-.113c0-.794.609-1.428 1.364-1.452zm-.355 5.945a.75.75 0 10-1.5.058l.347 9a.75.75 0 101.499-.058l-.346-9zm5.48.058a.75.75 0 10-1.498-.058l-.347 9a.75.75 0 001.5.058l.345-9z'
                                      clipRule='evenodd'/>
                            </svg>

                        </div>

                        <div className='flex justify-between border-b-2 border-gray-300 p-4'>

                            <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='currentColor'
                                 className='w-6 h-6'>
                                <path fillRule='evenodd'
                                      d='M16.28 11.47a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 01-1.06-1.06L14.69 12 7.72 5.03a.75.75 0 011.06-1.06l7.5 7.5z'
                                      clipRule='evenodd'/>
                            </svg>

                            <p>French</p>

                            <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='currentColor'
                                 className='w-6 h-6'>
                                <path fillRule='evenodd'
                                      d='M16.5 4.478v.227a48.816 48.816 0 013.878.512.75.75 0 11-.256 1.478l-.209-.035-1.005 13.07a3 3 0 01-2.991 2.77H8.084a3 3 0 01-2.991-2.77L4.087 6.66l-.209.035a.75.75 0 01-.256-1.478A48.567 48.567 0 017.5 4.705v-.227c0-1.564 1.213-2.9 2.816-2.951a52.662 52.662 0 013.369 0c1.603.051 2.815 1.387 2.815 2.951zm-6.136-1.452a51.196 51.196 0 013.273 0C14.39 3.05 15 3.684 15 4.478v.113a49.488 49.488 0 00-6 0v-.113c0-.794.609-1.428 1.364-1.452zm-.355 5.945a.75.75 0 10-1.5.058l.347 9a.75.75 0 101.499-.058l-.346-9zm5.48.058a.75.75 0 10-1.498-.058l-.347 9a.75.75 0 001.5.058l.345-9z'
                                      clipRule='evenodd'/>
                            </svg>

                        </div>

                    </div>

                </div>
            </div>
        </>
    );
};

export default Sidenav;