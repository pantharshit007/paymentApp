import React from 'react'
import { Navigate } from 'react-router-dom'

function PrivateRoute({ children }) {
    // const navigate = useNavigate();
    // if you are logged in then only you can go to the dashboard
    const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';

    if (isLoggedIn) {
        return children
    } else {
        return <Navigate to="/signin" />;
    }
}

export default PrivateRoute