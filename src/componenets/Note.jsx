import React from 'react';

const Note = () => {
    return (
        <>
            <div className='w-full h-full p-5 flex flex-col bg-slate-300 border-2 border-slate-400 rounded-lg'>

                <div>
                    <input className='w-full h-[5rem] p-2 text-6xl bg-transparent outline-none' />


                </div>
                    <hr className='border-black border-[1.5px]' />

                <div className='w-full h-full'>
                    <textarea className='w-full h-full p-2 text-6xl bg-transparent outline-none resize-none'></textarea>
                </div>
            </div>
        </>
    );
};

export default Note;