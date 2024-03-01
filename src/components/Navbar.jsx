import React, { useState } from "react";
import { Link, Outlet, useLocation } from "react-router-dom";
import { FireIcon, ChatBubbleLeftRightIcon, UserIcon, PhoneArrowDownLeftIcon } from "@heroicons/react/24/solid";

const Navbar = () => {
    const location = useLocation();

    return (
        <div className='h-screen'>
            <div className="max-w-sm mx-auto h-screen">
                <Outlet className="z-1" />
                <nav className="fixed z-2 py-2 bottom-0 w-full max-w-sm flex grid grid-cols-3 bg-[#111419] border-t border-gray-600">
                    <Link to="/dashboard" className="flex justify-center items-center">
                        <button><FireIcon className={`w-9 h-9 my-1 ${location.pathname === "/dashboard" ? "text-[#e67615]" : ""}`} /></button>
                    </Link>
                    <Link to="/messages" className="flex justify-center items-center">
                        <button><ChatBubbleLeftRightIcon className={`w-9 h-9 my-1 ${location.pathname === "/messages" ? "text-[#1573e6]" : ""}`} /></button>
                    </Link>
                    <Link to="/profile" className="flex justify-center items-center">
                        <button><UserIcon className={`w-9 h-9 my-1 ${location.pathname === "/profile" ? "text-[#8fc1ff]" : ""}`} /></button>
                    </Link>
                </nav>
            </div>
        </div>
    );
};

export default Navbar;
