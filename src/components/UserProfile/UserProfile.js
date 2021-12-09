import React, { useState, useEffect } from 'react';

import './UserProfile.css'
const UserProfile = () => {
    const [User, SetUser] = useState({});
    useEffect(() => {
        fetch('http://localhost:5000/user')
            .then(res => res.json())
            .then(data => SetUser(data))
    }, [])
    return (

        <div>
            <div className="m-5">
                <div className="card">
                    <div class="card-header" style={{
                        backgroundImage:
                            "url(https://images.unsplash.com/photo-1540228232483-1b64a7024923?ixlib=rb-1.2.1&auto=format&fit=crop&w=967&q=80)"
                    }}>
                        <div className="card-photo">
                            <img src={User.image} style={{ borderRadius: '50%', height: '10rem', width: "10rem" }} />
                        </div>
                    </div>
                    <div className="card-body">
                        <h3 className="card-name">{User.name}</h3>
                        <h3 className="card-name">{User.email}</h3>
                    </div>
                </div>
            </div>

        </div>

    );
};

export default UserProfile;
