import React from 'react';
import { useParams } from 'react-router-dom';

const ProfileDetail = () => {
    const params = useParams();
    console.log(params);
    return (
        <div>
            <h1>Profile Detail</h1>
            <h2>Hello {params.username}</h2>
        </div>
    );
}

export default ProfileDetail;
