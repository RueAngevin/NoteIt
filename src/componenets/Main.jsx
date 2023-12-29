import React from 'react';
import Sidenav from './Sidenav.jsx';
import Note from './Note.jsx';

const Main = () => {
    return (
        <>
            <div className='grid grid-cols-5 font-mono'>

                <Sidenav />

                <div className='h-screen w-full overflow-hidden bg-amber-50 p-[0.5rem] col-span-4'>

                    <Note />

                </div>

            </div>
        </>
    );
};

export default Main;