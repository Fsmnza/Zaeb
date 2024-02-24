import { createBrowserRouter } from "react-router-dom";
import DefaultLayout from "./components/DefaultLayout";
import Dashboard from "./views/home_page/Dashboard";
import Homepage from "./views/home_page/Homepage";
import ContactUspage from "./views/contacts/ContactUspage";
import Settings from "./views/common/Settings";
import Boarding from "./views/home_page/Boarding";

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
                path: '/dashboard',
                element: <Dashboard />
            },
            {
                path: '/contacts',
                element: <ContactUspage />
            },
            {
                path: '/settings',
                element: <Settings />
            },
            {
                path: '/boarding',
                element: <Boarding />
            },
        ]
    },
])

export default router;