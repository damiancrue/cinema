import { useAuth } from "../Context/authContext";
import { Navigate } from "react-router-dom";

export default function ProtectedRoute({children}) {
    const {user} = useAuth()
    console.log(user)

    if (!user) return <Navigate to ="/login"/>

    return <>{children}</>
}