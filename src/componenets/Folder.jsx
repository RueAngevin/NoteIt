import React, {useState} from 'react';
import File from './File.jsx';

const Folder = () => {

    const [folder, setFolder] = useState(true);

    const toggleFolder = () => {
        setFolder(!folder);
    };

    return (
        <>
            {folder ? (
                <div>
                    <div className='flex justify-between group transition duration-200 hover:bg-gray-200 border-b-2 border-gray-300 p-4 cursor-pointer'>

                        <svg onClick={toggleFolder} xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'
                             fill='currentColor'
                             className='w-6 h-6 group-hover:bg-gray-300 rounded-lg duration-200 transition'>
                            <path fillRule='evenodd'
                                  d='M16.28 11.47a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 01-1.06-1.06L14.69 12 7.72 5.03a.75.75 0 011.06-1.06l7.5 7.5z'
                                  clipRule='evenodd'/>
                        </svg>

                        <p onClick={toggleFolder} className='text-select group-hover:underline'>French</p>

                        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='currentColor'
                             className='w-6 h-6'>
                            <path fillRule='evenodd'
                                  d='M16.5 4.478v.227a48.816 48.816 0 013.878.512.75.75 0 11-.256 1.478l-.209-.035-1.005 13.07a3 3 0 01-2.991 2.77H8.084a3 3 0 01-2.991-2.77L4.087 6.66l-.209.035a.75.75 0 01-.256-1.478A48.567 48.567 0 017.5 4.705v-.227c0-1.564 1.213-2.9 2.816-2.951a52.662 52.662 0 013.369 0c1.603.051 2.815 1.387 2.815 2.951zm-6.136-1.452a51.196 51.196 0 013.273 0C14.39 3.05 15 3.684 15 4.478v.113a49.488 49.488 0 00-6 0v-.113c0-.794.609-1.428 1.364-1.452zm-.355 5.945a.75.75 0 10-1.5.058l.347 9a.75.75 0 101.499-.058l-.346-9zm5.48.058a.75.75 0 10-1.498-.058l-.347 9a.75.75 0 001.5.058l.345-9z'
                                  clipRule='evenodd'/>
                        </svg>

                    </div>
                </div>
            ) : (

                <div className='flex flex-col'>
                    <div className='flex justify-between group hover:bg-gray-200 p-4 cursor-pointer'>

                        <svg onClick={toggleFolder} xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'
                             fill='currentColor'
                             className='w-6 h-6 group-hover:bg-gray-300 rounded-lg rotate-90 duration-200 transition'>
                            <path fillRule='evenodd'
                                  d='M16.28 11.47a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 01-1.06-1.06L14.69 12 7.72 5.03a.75.75 0 011.06-1.06l7.5 7.5z'
                                  clipRule='evenodd'/>
                        </svg>

                        <p onClick={toggleFolder} className='text-select group-hover:underline'>French</p>

                        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='currentColor'
                             className='w-6 h-6'>
                            <path fillRule='evenodd'
                                  d='M16.5 4.478v.227a48.816 48.816 0 013.878.512.75.75 0 11-.256 1.478l-.209-.035-1.005 13.07a3 3 0 01-2.991 2.77H8.084a3 3 0 01-2.991-2.77L4.087 6.66l-.209.035a.75.75 0 01-.256-1.478A48.567 48.567 0 017.5 4.705v-.227c0-1.564 1.213-2.9 2.816-2.951a52.662 52.662 0 013.369 0c1.603.051 2.815 1.387 2.815 2.951zm-6.136-1.452a51.196 51.196 0 013.273 0C14.39 3.05 15 3.684 15 4.478v.113a49.488 49.488 0 00-6 0v-.113c0-.794.609-1.428 1.364-1.452zm-.355 5.945a.75.75 0 10-1.5.058l.347 9a.75.75 0 101.499-.058l-.346-9zm5.48.058a.75.75 0 10-1.498-.058l-.347 9a.75.75 0 001.5.058l.345-9z'
                                  clipRule='evenodd'/>
                        </svg>
                    </div>

                    <div className='flex flex-col'>

                        <File/>

                        <File/>

                    </div>

                </div>
            )}
        </>
    )
        ;
};

export default Folder;