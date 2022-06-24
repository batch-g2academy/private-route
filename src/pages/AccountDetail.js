import React from 'react';
import { useParams, useLocation, useNavigate } from 'react-router-dom';

const AccountDetail = () => {
    const params = useParams();
    const location = useLocation();
    const navigate = useNavigate();
    const { id } = params;

    console.log(location);

    const goToHome = () => {
        navigate('/profile')
    }

    return (
        <div>
            <h1>Account {id}</h1>
            <div onClick={goToHome}>Back</div>
        </div>
    );
}

export default AccountDetail;
