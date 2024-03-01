import React, { useState } from 'react';
import { ChevronLeftIcon } from '@heroicons/react/24/solid';


const ChatExample = () => {

    const handleBack = () => {
        window.history.back(); // Go back to the previous location
    };
  
    return (
        <div className='h-screen'>
            <div className='py-2 w-full top-0 fixed max-w-sm bg-[#111419]'>
                <div className='relative py-2'>
                    <ChevronLeftIcon className='w-8 h-8 absolute cursor-pointer mt-2' onClick={handleBack} />
                    <div className="flex flex-col items-center">
                        <div className="relative w-[40px] h-[40px]">
                            <img
                                className="absolute inset-0 object-cover rounded-full w-[40px] h-[40px]"
                                src="user.jpg"
                                alt="Your Image"
                            />
                        </div>
                        <p className="text-center text-sm">Name</p>
                    </div>
                </div>
                <div className='border border-gray-800 w-full h-[1px]' />
            </div>

            <div className='pt-[100px] pb-[50px]'>
                {/* message left */}
                <div className='w-full pl-3 my-2 break-words'>
                    <div className='bg-gray-700 wrap-content rounded-2xl pt-2 pb-1 inline-block max-w-[50%]'>
                        <p className='px-3'>Hello</p>
                        <div className='flex'>
                            <p className='ml-auto text-[10px] pr-2'>14:15</p>
                        </div>
                    </div>
                </div>

                {/* message right */}
                <div className='w-full pr-3 my-2 break-words flex'>
                    <div className='bg-gray-700 wrap-content rounded-2xl pt-2 pb-1 inline-block max-w-[50%] ml-auto'>
                        <p className='px-3'>Hello</p>
                        <div className='flex'>
                            <p className='ml-auto text-[10px] pr-2'>14:15</p>
                        </div>
                    </div>
                </div>

                {/* message left */}
                <div className='w-full pl-3 my-2 break-words'>
                    <div className='bg-gray-700 wrap-content rounded-2xl pt-2 pb-1 inline-block max-w-[50%]'>
                        <p className='px-3'>Hello</p>
                        <div className='flex'>
                            <p className='ml-auto text-[10px] pr-2'>14:15</p>
                        </div>
                    </div>
                </div>

                {/* message right */}
                <div className='w-full pr-3 my-2 break-words flex'>
                    <div className='bg-gray-700 wrap-content rounded-2xl pt-2 pb-1 inline-block max-w-[50%] ml-auto'>
                        <p className='px-3'>Hello</p>
                        <div className='flex'>
                            <p className='ml-auto text-[10px] pr-2'>14:15</p>
                        </div>
                    </div>
                </div>

                {/* message right */}
                <div className='w-full pr-3 my-2 break-words flex'>
                    <div className='bg-gray-700 wrap-content rounded-2xl pt-2 pb-1 inline-block max-w-[50%] ml-auto'>
                        <p className='px-3'>Hello</p>
                        <div className='flex'>
                            <p className='ml-auto text-[10px] pr-2'>14:15</p>
                        </div>
                    </div>
                </div>

                {/* message left */}
                <div className='w-full pl-3 my-2 break-words'>
                    <div className='bg-gray-700 wrap-content rounded-2xl pt-2 pb-1 inline-block max-w-[50%]'>
                        <p className='px-3'>Hello</p>
                        <div className='flex'>
                            <p className='ml-auto text-[10px] pr-2'>14:15</p>
                        </div>
                    </div>
                </div>

                {/* message right */}
                <div className='w-full pr-3 my-2 break-words flex'>
                    <div className='bg-gray-700 wrap-content rounded-2xl pt-2 pb-1 inline-block max-w-[50%] ml-auto'>
                        <p className='px-3'>Hello</p>
                        <div className='flex'>
                            <p className='ml-auto text-[10px] pr-2'>14:15</p>
                        </div>
                    </div>
                </div>

                {/* message left */}
                <div className='w-full pl-3 my-2 break-words'>
                    <div className='bg-gray-700 wrap-content rounded-2xl pt-2 pb-1 inline-block max-w-[50%]'>
                        <p className='px-3'>Hello</p>
                        <div className='flex'>
                            <p className='ml-auto text-[10px] pr-2'>14:15</p>
                        </div>
                    </div>
                </div>

                {/* message right */}
                <div className='w-full pr-3 my-2 break-words flex'>
                    <div className='bg-gray-700 wrap-content rounded-2xl pt-2 pb-1 inline-block max-w-[50%] ml-auto'>
                        <p className='px-3'>Hello</p>
                        <div className='flex'>
                            <p className='ml-auto text-[10px] pr-2'>14:15</p>
                        </div>
                    </div>
                </div>

                {/* message right */}
                <div className='w-full pr-3 my-2 break-words flex'>
                    <div className='bg-gray-700 wrap-content rounded-2xl pt-2 pb-1 inline-block max-w-[50%] ml-auto'>
                        <p className='px-3'>Hello</p>
                        <div className='flex'>
                            <p className='ml-auto text-[10px] pr-2'>14:15</p>
                        </div>
                    </div>
                </div>
                {/* message left */}
                <div className='w-full pl-3 my-2 break-words'>
                    <div className='bg-gray-700 wrap-content rounded-2xl pt-2 pb-1 inline-block max-w-[50%]'>
                        <p className='px-3'>Hello</p>
                        <div className='flex'>
                            <p className='ml-auto text-[10px] pr-2'>14:15</p>
                        </div>
                    </div>
                </div>

                {/* message right */}
                <div className='w-full pr-3 my-2 break-words flex'>
                    <div className='bg-gray-700 wrap-content rounded-2xl pt-2 pb-1 inline-block max-w-[50%] ml-auto'>
                        <p className='px-3'>Hello</p>
                        <div className='flex'>
                            <p className='ml-auto text-[10px] pr-2'>14:15</p>
                        </div>
                    </div>
                </div>

                {/* message left */}
                <div className='w-full pl-3 my-2 break-words'>
                    <div className='bg-gray-700 wrap-content rounded-2xl pt-2 pb-1 inline-block max-w-[50%]'>
                        <p className='px-3'>Hello</p>
                        <div className='flex'>
                            <p className='ml-auto text-[10px] pr-2'>14:15</p>
                        </div>
                    </div>
                </div>

                {/* message right */}
                <div className='w-full pr-3 my-2 break-words flex'>
                    <div className='bg-gray-700 wrap-content rounded-2xl pt-2 pb-1 inline-block max-w-[50%] ml-auto'>
                        <p className='px-3'>Hello</p>
                        <div className='flex'>
                            <p className='ml-auto text-[10px] pr-2'>14:15</p>
                        </div>
                    </div>
                </div>

                {/* message right */}
                <div className='w-full pr-3 my-2 break-words flex'>
                    <div className='bg-gray-700 wrap-content rounded-2xl pt-2 pb-1 inline-block max-w-[50%] ml-auto'>
                        <p className='px-3'>Hello</p>
                        <div className='flex'>
                            <p className='ml-auto text-[10px] pr-2'>14:15</p>
                        </div>
                    </div>
                </div>
            </div>

            <form action='' className='messageInput py-6 max-w-sm bg-[#111419] border-t-2 border-gray-800'>
                <input type="text"/>
                <input className="bn632-hover-mini bn25-mini text-sm small_submit ml-auto" type="submit" value="Submit" />
            </form>
        </div>
    )
}

export default ChatExample
