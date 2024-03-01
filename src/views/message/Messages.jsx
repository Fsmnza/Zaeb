import React, { useState, useEffect } from 'react';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import { Link } from 'react-router-dom';

const Messages = () => {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    // Вынесите fetch запрос внутрь useEffect
    const fetchMessages = async () => {
      try {
        const response = await fetch(`${API_ENDPOINT}/api/v1/messages`);
        const data = await response.json();
        setMessages(data);
      } catch (error) {
        console.error('Error fetching messages:', error);
      }
    };

    // Вызовите функцию fetchMessages внутри useEffect
    fetchMessages();
  }, []); // Пустой массив зависимостей означает, что эффект будет запущен только при монтировании компонента

  return (
    <div>
      <div className='py-2 w-full'>
        <h1 className='text-lg pl-2'>Dating app</h1>
        <div className='mt-4 break-words'>
            <Splide
                options={{
                    type       : 'slide',
                    drag: 'free',
                    perPage    : 3,
                    focus      : 'center',
                    gap        : '5px',
                    pagination : false,
                    autoplay   : false,
                    pauseOnHover: true,
                    arrows: false,
                }}
                >
                <SplideSlide>
                    <div className="flex flex-col items-center">
                        <div className="relative w-[110px] h-[130px] rounded-xl">
                            <img
                                className="absolute inset-0 object-cover rounded-xl w-[110px] h-[130px]"
                                src="user.jpg"
                                alt="Your Image"
                            />
                        </div>
                        <p className="text-center">Name</p>
                    </div>
                </SplideSlide>
                <SplideSlide>
                    <div className="flex flex-col items-center">
                        <div className="relative w-[110px] h-[130px] rounded-xl">
                            <img
                                className="absolute inset-0 object-cover rounded-xl w-[110px] h-[130px]"
                                src="user.jpg"
                                alt="Your Image"
                            />
                        </div>
                        <p className="text-center">Name</p>
                    </div>
                </SplideSlide>
                <SplideSlide>
                    <div className="flex flex-col items-center">
                        <div className="relative w-[110px] h-[130px] rounded-xl">
                            <img
                                className="absolute inset-0 object-cover rounded-xl w-[110px] h-[130px]"
                                src="user.jpg"
                                alt="Your Image"
                            />
                        </div>
                        <p className="text-center">Name</p>
                    </div>
                </SplideSlide>
                <SplideSlide>
                    <div className="flex flex-col items-center">
                        <div className="relative w-[110px] h-[130px] rounded-xl">
                            <img
                                className="absolute inset-0 object-cover rounded-xl w-[110px] h-[130px]"
                                src="user.jpg"
                                alt="Your Image"
                            />
                        </div>
                        <p className="text-center">Name</p>
                    </div>
                </SplideSlide>
                <SplideSlide>
                    <div className="flex flex-col items-center">
                        <div className="relative w-[110px] h-[130px] rounded-xl">
                            <img
                                className="absolute inset-0 object-cover rounded-xl w-[110px] h-[130px]"
                                src="user.jpg"
                                alt="Your Image"
                            />
                        </div>
                        <p className="text-center">Name</p>
                    </div>
                </SplideSlide>
                </Splide>
        </div>
        
        <div className='px-2 mt-4'>
            <h2 className='text-lg'>Messages</h2>
            <div>
                <Link to="/chat" className='flex py-3 cursor-pointer'>
                    <div className='w-[27%]'>
                        <div className="relative w-20 h-20">
                            <img
                                className="absolute inset-0 object-cover rounded-full w-20 h-20"
                                src="user.jpg"
                                alt="Your Image"
                            />
                        </div>
                    </div>
                    <div className='w-[73%] my-auto'>
                        <p className=''>Alina</p>
                        <p className='text-sm truncate pr-2'>↩ "HelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHello!"</p>
                    </div>
                </Link>
                <div className='flex'>
                    <div className='border border-gray-600 w-[78%] h-[1px] ml-auto' />
                </div>
            </div>

            <div>
                <Link to="/chat" className='flex py-3 cursor-pointer'>
                    <div className='w-[27%]'>
                        <div className="relative w-20 h-20">
                            <img
                                className="absolute inset-0 object-cover rounded-full w-20 h-20"
                                src="user.jpg"
                                alt="Your Image"
                            />
                        </div>
                    </div>
                    <div className='w-[73%] my-auto'>
                        <p className=''>Alina</p>
                        <p className='text-sm truncate pr-2'>"Hello!"</p>
                    </div>
                </Link>
                <div className='flex'>
                    <div className='border border-gray-600 w-[78%] h-[1px] ml-auto' />
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Messages;
export const API_ENDPOINT = `${window.location.protocol}//${import.meta.env.VITE_API_HOST || 'localhost:8080'}`;