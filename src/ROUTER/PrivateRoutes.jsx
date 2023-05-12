import { useContext } from 'react';
import AuthProvider, { AuthContext } from '../firebase/AuthProvider/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoutes = ({children}) => {
    const {user, loading} = useContext(AuthContext)
    const location = useLocation();

    if (loading) {
        return <h1 className='text-7xl'>Loading</h1>
    }
    return user? children : <Navigate to="/login" replace="true"></Navigate>
};

export default PrivateRoutes;