import React, {useState} from 'react';

const Main = () => {
    const [menu, setMenu] = useState(true);

    const toggle = () => {
        setMenu(!menu);
    };

    return (
        <>
            {menu ? (
                <div className='w-full h-screen bg-slate-100'>
                    <div
                        className='absolute top-0 left-0 h-screen w-[5rem] bg-slate-200 transition-all duration-500 ease-in-out'>
                        <ul className='pt-5 flex flex-col gap-[3rem] justify-center items-center'>
                            <li className='p-2 bg-rose-300 rounded-full drop-shadow-xl cursor-pointer' onClick={toggle}>
                                <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='currentColor'
                                     className='w-6 h-6'>
                                    <path fillRule='evenodd'
                                          d='M3 6.75A.75.75 0 013.75 6h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 6.75zM3 12a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 12zm0 5.25a.75.75 0 01.75-.75h16.5a .75.75 0 010 1.5H3.75a.75.75 0 01-.75-.75z'
                                          clipRule='evenodd'/>
                                </svg>
                            </li>
                            <li className='relative p-2 w-[3rem] h-[3rem] flex justify-center items-center bg-emerald-600/30 backdrop-blur-lg cursor-pointer rounded-lg transition-all duration-500 ease-in-out'>
                                <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='currentColor'
                                     className='absolute w-6 h-6'>
                                    <path fillRule='evenodd'
                                          d='M12 3.75a.75.75 0 01.75.75v6.75h6.75a.75.75 0 010 1.5h-6.75v6.75a.75.75 0 01-1.5 0v-6.75H4.5a.75.75 0 010-1.5h6.75V4.5a.75.75 0 01.75-.75z'
                                          clipRule='evenodd'/>
                                </svg>
                                <p className='opacity-0'>
                                    New note
                                </p>
                            </li>
                        </ul>
                    </div>
                </div>
            ) : (
                <div className='w-full h-screen bg-slate-100'>
                    <div
                        className='absolute top-0 left-0 h-screen w-[15rem] bg-slate-200 transition-all duration-500 ease-in-out'>
                        <ul className='pt-5 flex flex-col gap-[3rem] justify-center items-center'>
                            <li className='p-2 bg-rose-300 rounded-full drop-shadow-xl cursor-pointer' onClick={toggle}>
                                <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='currentColor'
                                     className='w-6 h-6'>
                                    <path fillRule='evenodd'
                                          d='M3 6.75A.75.75 0 013.75 6h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 6.75zM3 12a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 12zm0 5.25a.75.75 0 01.75-.75h16.5a .75.75 0 010 1.5H3.75a.75.75 0 01-.75-.75z'
                                          clipRule='evenodd'/>
                                </svg>
                            </li>
                            <li className='p-2 flex h-[3rem] justify-center items-center gap-2 bg-emerald-600/30 backdrop-blur-lg rounded-lg cursor-pointer transition-all duration-500 ease-in-out w-[8rem]'>
                                <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='currentColor'
                                     className='w-6 h-6'>
                                    <path fillRule='evenodd'
                                          d='M12 3.75a.75.75 0 01.75.75v6.75h6.75a.75.75 0 010 1.5h-6.75v6.75a.75.75 0 01-1.5 0v-6.75H4.5a.75.75 0 010-1.5h6.75V4.5a.75.75 0 01.75-.75z'
                                          clipRule='evenodd'/>
                                </svg>
                                <p className='transition-all opacity-100 delay-[280ms]'>
                                    New note
                                </p>
                            </li>
                        </ul>
                    </div>
                </div>
            )}
        </>
    );
};

export default Main;
