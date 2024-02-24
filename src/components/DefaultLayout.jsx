import React, { useState } from "react";
import { Link, Outlet, useLocation } from "react-router-dom";

const DefaultLayout = () => {



    return (
        <div className='h-screen'>
            <div className="max-w-sm mx-auto h-screen">
                <Outlet className="z-1" />
            </div>
        </div>
    );
};

export default DefaultLayout;