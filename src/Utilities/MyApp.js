
import { Homepage } from "../Pages/Homepage"
import { Cart } from "../Pages/Cart"
import Login from "../Pages/Login"
import ResturantPage from "../Pages/ResturantPage"
import { SignUp } from "../Pages/SignUp"
import { createBrowserRouter,Outlet } from "react-router-dom"
import Header from "../Pages/Header"
import Footer from "../Pages/Footer"
const App = ()=>{
    return(
        <>
            <Header/>
            <Outlet/>
            <Footer/>
        </>
    )
}
export const MyRouter = createBrowserRouter([{
    path:'/',
    element:<App/>,
    children:[
        {
            path:"/",
            element:<Homepage/>
        },
        {
            path:"/cart",
            element:<Cart/>
        },
        {
            path:"/Login",
            element:<Login/>
        },
        {
            path:"/signup",
            element:<SignUp/>
        },
        {
            path:'/RestutantPage',
            element:<ResturantPage/>
        }
    ]
    
    
}])
