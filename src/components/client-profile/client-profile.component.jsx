
import React from 'react'
import './client-profile.style.css'

const ClientProfile = ()  => {
    return (
        <div className="client-profile-container">
          <div className="client-profile">
            <ul className="profile-tabs" >
                <li>Chat</li>
                <li>Attendance</li>
                <li>Details</li>              
            </ul>
            <div className="profile-image-and-name">
                <img src={process.env.PUBLIC_URL + '/images/nancy williams.jpg'} alt="Nancy Williams" />
                <h3>ROMANA FRANCOIS</h3>
            </div>
            <div className="information-section">
                <section className="personal-info">
                    <div className="icon-and-title">
                        <i class="fas fa-address-card"></i>
                        <h5>Personal Info</h5>
                    </div>
                    <div className="name-and-value">
                        <span>Title</span>
                        <span>Madame</span>
                    </div>
                    <div className="name-and-value">
                        <span>First name</span>
                        <span>Romana</span>
                    </div>
                    <div className="name-and-value">
                        <span>Last name</span>
                        <span>Francois</span>
                    </div>
                    <div className="name-and-value">
                        <span>Gander</span>
                        <span>Female</span>
                    </div>
                    <div className="name-and-value">
                        <span>Date of Birth</span>
                        <span>1964-04-24T06:25:40.777z</span>
                    </div>
                    <div className="name-and-value">
                        <span>Age</span>
                        <span>57</span>
                    </div>
                    <div className="name-and-value">
                        <span>ID name</span>
                        <span>AVS</span>
                    </div>
                    <div className="name-and-value">
                        <span>ID name</span>
                        <span>AVS</span>
                    </div>

                </section>
                <section className="contact" >

                </section>
                <section className="location">

                </section>
                <section className="login-details">

                </section>
                <section className="info">

                </section>
            </div>
          </div>
        </div>
    )
}

export default ClientProfile;