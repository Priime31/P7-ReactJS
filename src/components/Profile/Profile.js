import React from 'react';
import './profile.scss';

const Profile = ({profile}) => {
    return (
        <div className='profile_block'>
            <p>{profile.name}</p>
            <img src={profile.picture} alt=''/>
        </div>
    );
};

export default Profile;