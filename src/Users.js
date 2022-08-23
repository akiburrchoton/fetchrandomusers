import React from 'react';
import "./users.css";

import { useState } from 'react';

function Users(user) {


    // Hook
    const [isShowingDeatils, setIsShowingDeatils] = useState(false);

    // Function to show the detailed user info
    function showDetails() {
        setIsShowingDeatils(true);
    }
    
    // Function to hide the detailed user info in detail
    function hideDetails() {
        setIsShowingDeatils(false);
    }

    // Basic User Info
    function getUserBasic(){
        return <div className='basic-info'>
            <img src={user.user.avatar} alt="" width="120px" />
            <h3>Name: {user.user.first_name}  {user.user.last_name}</h3>
            <p><strong>Email:</strong> {user.user.employment.title}</p>
        </div>
    }

    // Detailed User Info
    function getUserDetails(){
        return <div className='detailed-info'>
            <p><strong>Email: </strong> {user.user.email} </p>
            <p><strong> Date of Birth: </strong> {user.user.date_of_birth} </p>
            <p><strong> Gender: </strong> {user.user.gender} </p>
            <p><strong> Phone: </strong> {user.user.phone_number} </p>
            <p><strong> SIN: </strong> {user.user.social_insurance_number} </p>
            <p><strong> Subscription Plan: </strong> {user.user.subscription.plan} </p>
        </div>
    }


    return <div className='main-user-div' key={user.user.uid} onMouseEnter={showDetails} onMouseOut={hideDetails}>
                {
                    // Check if mouse hover is true or not
                    // If yes then to display the detailed view by flipping

                    isShowingDeatils ? getUserDetails() : getUserBasic() 
                }
           </div>

}

export default Users
