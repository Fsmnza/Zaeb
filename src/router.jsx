import { createBrowserRouter } from "react-router-dom";
import DefaultLayout from "./components/DefaultLayout";
import Dashboard from "./views/home_page/Dashboard";
import Homepage from "./views/home_page/Homepage";
import ContactUspage from "./views/contacts/ContactUspage";
import Settings from "./views/common/Settings";
import Messages from "./views/message/Messages";
import Boarding from "./views/home_page/Boarding";
import Navbar from "./components/Navbar";
import ChatExample from "./views/message/ChatExample";
import Profile from "./views/home_page/Profile";
// import axios from 'axios';
// import { API_ENDPOINT } from './index'
const router = createBrowserRouter([
    {
        path: '/',
        element: <DefaultLayout />,
        children: [
            {
                path: '/',
                element: <Homepage />
            },
            {
                path: '/settings',
                element: <Settings />
            },
            {
                path: '/boarding',
                element: <Boarding />
            },
            {
                path: '/chat',
                element: <ChatExample />
            },
        ]
    },
    {
        path: '/',
        element: <Navbar />,
        children: [
            {
                path: '/dashboard',
                element: <Dashboard />
            },
            {
                path: '/contacts',
                element: <ContactUspage />
            },
            {
                path: '/messages',
                element: <Messages />
            },
            {
                path: '/profile',
                element: <Profile />
            },
        ]
    },
])

export default router;