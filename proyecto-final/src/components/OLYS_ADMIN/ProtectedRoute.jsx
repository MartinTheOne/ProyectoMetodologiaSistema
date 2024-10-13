import { Navigate } from "react-router-dom";
import { isTokenvalid } from "../../utils/isTokenValid";

const ProtectedRoute=({children})=>{
    const token=localStorage.getItem('token');

    if(!token||!isTokenvalid(token))return <Navigate to="/admin/login"/>


    return children;
}
export default ProtectedRoute;