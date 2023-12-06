import {Home,AuthPage} from '../pages/index'
export const router = [
    {
        path:'/',
        element: <Home/>,
        auth:true,
    },
    {
        path:'/auth',
        element: <AuthPage/>,
        auth: false
    }
]