import { useRouter } from 'next/router'
import { useContext } from 'react'
import AuthContext from '../../context/auth/context'




const DashboardGuard = ({ children }) => {
    const { isAuthenticated, isLoading } = useContext(AuthContext)
    const router = useRouter();

    return (
         children 
    )
};





export default DashboardGuard