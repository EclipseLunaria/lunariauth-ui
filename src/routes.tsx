import { createBrowserRouter } from "react-router-dom";
import RegisterPage from "./Pages/RegisterPage";
import LoginPage from "./Pages/LoginPage";

const routes = createBrowserRouter(
    [
        {
            path: "/",
            element: <h1>Home</h1>
        },
        {
            path: "/register",
            element: <RegisterPage />
        },
        {
            path: '/login',
            element: <LoginPage />
        }
    ]
)

export default routes;