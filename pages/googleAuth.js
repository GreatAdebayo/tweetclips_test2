import React, { useContext } from 'react'
import { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom'
import AuthContext from '../context/auth/context';





const GoogleAuth = () => {

    const navigate = useNavigate();
    let { otherAuth } = useContext(AuthContext)


    function useQuery() {
        return new URLSearchParams(useLocation().search);
    }

    let query = useQuery();

    let res = JSON.parse(query.get("response"));

    const submit = () => {
        localStorage.setItem('ctoken', res.token)
        if (res.isSuccess === true) {
            otherAuth(res.token)
            return true;
        } else if (res.type === 3) {
            navigate(`/new-device/${res.email}/${res.device}`)
        }
    }

    useEffect(() => {
        submit()
    });


    return (
        <>

        </>
    )
}
export default GoogleAuth